"use client";

import { useEffect } from "react";

export function SaveAnswers({ answers }: { answers: string }) {
  useEffect(() => {
    if (answers) {
      sessionStorage.setItem("pending_diagnostic", answers);
    }
  }, [answers]);
  
  return null;
}
