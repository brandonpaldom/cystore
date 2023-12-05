import Link from 'next/link'
import Button from './button'

export default function MainHero() {
  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-main-hero bg-cover bg-center p-6 md:h-[30rem]">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center text-center text-white">
        <h1>El futuro al alcance de tu mano</h1>
        <p className="mt-4 text-[1.25rem]">
          Explora lo último en tecnología avanzada, donde la innovación y el
          diseño elegante se fusionan para revolucionar tu mundo.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/products/all">
            <Button>Comprar ahora</Button>
          </Link>
          <Link href="/about">
            <Button color="secondary">Más información</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
