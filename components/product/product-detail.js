import Image from 'next/image'
import AddToCart from '@/components/product/add-to-cart'
import { getProductBySlug } from '@/utils/products'
import { formatCurrency } from '@/utils/format-currency'

export default async function ProductDetail({ slug }) {
  const product = await getProductBySlug(slug)

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
          <p className="text-sm font-medium uppercase text-indigo-500">
            {product.category}
          </p>
          <h1>{product.name}</h1>
          <h2>{formatCurrency(product.price)}</h2>
          <p className="my-6 text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </section>
  )
}
