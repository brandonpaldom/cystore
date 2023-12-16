import Link from 'next/link'
import Button from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto mt-16 max-w-screen-md text-center">
        <h1>¡Gracias por contactarnos!</h1>
        <p className="mb-8 mt-4 text-xl">
          En breve nos pondremos en contacto contigo.
        </p>
        <Link href="/">
          <Button>Volver a la tienda</Button>
        </Link>
      </div>
    </div>
  )
}
