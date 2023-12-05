import Link from 'next/link'
import BackToHomeLink from '@/components/auth/back-to-home-link'
import Button from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-6">
      <BackToHomeLink />
      <h2>Accede a tu cuenta</h2>
      <form className="card flex flex-col gap-4">
        <label className="block">
          <span className="text-neutral-700">Correo electrónico</span>
          <input type="email" />
        </label>
        <label className="block">
          <span className="text-neutral-700">Contraseña</span>
          <input type="password" />
        </label>
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <Link href="/auth/register" className="link">
          Regístrate
        </Link>
      </p>
    </div>
  )
}
