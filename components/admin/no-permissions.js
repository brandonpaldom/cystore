import { SignedIn, SignOutButton } from '@clerk/nextjs'
import Button from '@/components/ui/button'

export default function NoPermissions() {
  return (
    <div className="mx-auto mt-16 flex h-full max-w-screen-md flex-col items-center justify-center text-center">
      <h1>No tienes permisos para acceder a esta página.</h1>
      <p className="mb-8 mt-4 text-xl">
        Solo los usuarios con rol de administrador pueden acceder a esta página.
      </p>
      <SignedIn>
        <SignOutButton>
          <Button>Cerrar sesión</Button>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}
