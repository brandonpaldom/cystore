import Image from 'next/image'

import ProductItem from '@/components/product-item'

import { products } from '@/data/products'
import Button from '@/components/button'

export default function Page({ params }) {
  const product = products.find((product) => product.slug === params.slug)

  const relatedProducts = products.slice(0, 5)

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-lg bg-neutral-50 p-6">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:flex-row">
          <Image
            src={product.image}
            className="rounded-lg"
            alt={product.name}
            width={560}
            height={560}
          />
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <h2 className="text-xl">${product.price}.00</h2>
            <p className="my-6 text-neutral-500">{product.description}</p>
            <Button color="primary">Add to Cart</Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {relatedProducts.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
