import Image from 'next/image'
import AddToCart from './add-to-cart'
import { formatCurrency } from '@/lib/format-currency'

export default async function ProductDetail({ slug }) {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: 'no-store',
  })

  const product = await res.json()

  return (
    <section className="rounded-lg bg-white p-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:flex-row">
        <Image
          src={product.image}
          className="rounded-lg"
          alt={product.name}
          width={640}
          height={640}
        />
        <div className="flex flex-col items-start">
          <p className="text-[0.875rem] font-medium uppercase text-indigo-500">
            {product.category}
          </p>
          <h1>{product.name}</h1>
          <h2>{formatCurrency(product.price)}</h2>
          <p className="my-6 text-neutral-600">
            Montes nascetur ridiculus mus. Nullam quis risus eget urna mollis
            ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nulla vitae elit libero,
            a pharetra augue.
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </section>
  )
}
