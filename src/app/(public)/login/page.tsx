import { login, signup } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error: string }
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center -mt-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bienvenido a GrowthOS</CardTitle>
          <CardDescription>Inicia sesión o crea tu nuevo workspace operativo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Crear Workspace</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input name="email" type="email" placeholder="tu@empresa.com" required />
                  <Input name="password" type="password" placeholder="••••••••" required />
                </div>
                {searchParams?.error && (
                  <p className="text-sm text-growos-danger">{searchParams.error}</p>
                )}
                <Button formAction={login} className="w-full bg-growos-primary text-white hover:bg-growos-primary/90">
                  Iniciar Sesión
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form className="space-y-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Input name="first_name" placeholder="Nombre" required />
                    <Input name="last_name" placeholder="Apellido" required />
                  </div>
                  <Input name="company_name" placeholder="Nombre de la Empresa" required />
                  <Input name="email" type="email" placeholder="tu@empresa.com" required />
                  <Input name="password" type="password" placeholder="••••••••" required />
                </div>
                {searchParams?.error && (
                  <p className="text-sm text-growos-danger">{searchParams.error}</p>
                )}
                <Button formAction={signup} className="w-full bg-growos-primary text-white hover:bg-growos-primary/90">
                  Crear Workspace
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
