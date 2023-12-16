import Link from 'next/link'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format-currency'

export default function ProductItem({ product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="h-max rounded-lg bg-white transition-shadow duration-300 hover:shadow-md"
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
  )
}
