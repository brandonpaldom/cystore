import Link from 'next/link'
import InfoIcon from '@/components/icons/info'
import Button from '@/components/ui/button'

export default function EmptyCart() {
  return (
    <section className="mt-16 flex flex-col items-center rounded-lg">
      <InfoIcon width={48} height={40} className="text-indigo-600" />
      <h1>Tu carrito está vacío</h1>
      <Link href="/products/all" className="mt-8">
        <Button>Explorar productos</Button>
      </Link>
    </section>
  )
}
