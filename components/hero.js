import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex h-[400px] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-50 px-4 text-center">
      <h1 className="text-4xl font-bold">Welcome to Cystore</h1>
      <p className="text-lg">
        The best place to buy your favorite games and consoles at the best price
        and with the best service.
      </p>
      <Link href="/products" className="btn btn-primary">
        Shop Now
      </Link>
    </section>
  )
}
