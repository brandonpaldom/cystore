import { SignUp } from '@clerk/nextjs'

export const metadata = {
  title: 'Registrarse | Cystore',
  description: 'Regístrate para crear una cuenta.',
}

export default function Page() {
  return <SignUp redirectUrl="/admin/products" signInUrl="/auth/login" />
}
