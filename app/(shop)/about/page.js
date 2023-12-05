import Link from 'next/link'
import Button from '@/components/ui/button'

export default function Page() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-4xl font-bold">Nosotros</h2>
      <p className="text-lg">
        Esta página está en construcción. Vuelva a visitarla más tarde.
      </p>
      <Link href="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  )
}
