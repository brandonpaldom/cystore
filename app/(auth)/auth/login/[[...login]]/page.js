import { SignIn } from '@clerk/nextjs'

export const metadata = {
  title: 'Iniciar sesión | Cystore',
  description: 'Inicia sesión para acceder a tu cuenta.',
}

export default function Page() {
  return <SignIn redirectUrl="/admin/products" signUpUrl="/auth/register" />
}
