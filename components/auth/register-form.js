import Button from '@/components/ui/button'

export default function RegisterForm() {
  return (
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
  )
}
