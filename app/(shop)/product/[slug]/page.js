import Image from 'next/image'
import Link from 'next/link'

import RelatedProducts from '@/components/ui/related-products'

import { categories } from '@/data/categories'

import { formatCurrency } from '@/lib/format-currency'
import { getProduct, getFirst8Products } from '@/lib/products'

export default function Page({ params }) {
  const product = getProduct(params.slug)

  const category = categories.find(
    (category) => category.slug === product.category,
  )

  return (
    <div className="flex flex-col gap-8">
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
              {category.name}
            </p>
            <h1>{product.name}</h1>
            <h2>{formatCurrency(product.price)}</h2>
            <p className="my-6 text-neutral-600">
              Montes nascetur ridiculus mus. Nullam quis risus eget urna mollis
              ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Nulla vitae elit
              libero, a pharetra augue.
            </p>
            <div className="flex flex-col items-start gap-4 lg:flex-row">
              <Link href="/cart" className="btn btn-primary">
                Añadir al carrito
              </Link>
              <Link href="/products" className="btn btn-secondary">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>Productos relacionados</h2>
        <RelatedProducts products={getFirst8Products()} />
      </section>
    </div>
  )
}
