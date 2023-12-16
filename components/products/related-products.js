import Link from 'next/link'
import Image from 'next/image'
import { getRelatedProducts } from '@/utils/products'
import { formatCurrency } from '@/utils/format-currency'

export default async function RelatedProducts() {
  const products = await getRelatedProducts()

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-auto pb-6">
      {products.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          className="min-w-[15rem] snap-start snap-always rounded-lg bg-white transition-shadow duration-300 hover:shadow-md"
          key={product.id}
        >
          <div className="p-4">
            <p className="truncate font-bold">{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
          </div>
          <Image
            src={product.image}
            className="rounded-b-lg"
            width={500}
            height={500}
            alt={product.name}
          />
        </Link>
      ))}
    </div>
  )
}
