import Link from 'next/link'
import BackToHomeLink from '@/components/auth/back-to-home-link'
import Button from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-6">
      <BackToHomeLink />
      <h2>Crear una cuenta</h2>
      <form className="card flex flex-col gap-4">
        <label className="block">
          <span className="text-neutral-700">Nombre completo</span>
          <input type="text" />
        </label>
        <label className="block">
          <span className="text-neutral-700">Correo electrónico</span>
          <input type="email" />
        </label>
        <label className="block">
          <span className="text-neutral-700">Contraseña</span>
          <input type="password" />
        </label>
        <Button type="submit">Crear cuenta</Button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link href="/auth/login" className="link">
          Inicia sesión
        </Link>
      </p>
    </div>
  )
}
