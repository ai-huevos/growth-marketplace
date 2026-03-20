import subprocess
import json
import sys

def create_presentation(title):
    print(f"Creating presentation: {title}")
    result = subprocess.run(
        ["gws", "slides", "presentations", "create", "--json", json.dumps({"title": title})],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"Error creating presentation:\n{result.stderr}")
        return None
    data = json.loads(result.stdout)
    return data.get("presentationId")

if __name__ == "__main__":
    print("Testing GWS Auth...")
    test = subprocess.run(["gws", "slides", "presentations", "create", "--json", '{"title":"Test"}'], capture_output=True, text=True)
    if test.returncode != 0 and "Access denied" in test.stderr:
        print("ERROR: Authentication required. Please run 'gws auth login' in your local terminal.")
        sys.exit(1)
        
    pid = create_presentation("AUTECO Agentic Marketing System Pitch")
    if pid:
        print(f"Success! Presentation ID: {pid}")
        print(f"Link: https://docs.google.com/presentation/d/{pid}/edit")
