import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="flex flex-col gap-4">
      <Image
        src={product.image}
        className="rounded-lg"
        width={500}
        height={500}
        alt={product.name}
      />
      <div>
        <h3 className="font-bold">{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  )
}
