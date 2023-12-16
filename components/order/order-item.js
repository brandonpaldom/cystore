import Image from 'next/image'
import { formatCurrency } from '@/utils/format-currency'

export default function OrderItem({ product }) {
  return (
    <div className="flex items-start gap-4">
      <Image src={product.image} alt={product.name} width={64} height={64} />
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold">{product.name}</p>
          <p>{formatCurrency(product.price)}</p>
        </div>
        <p className="text-sm">
          Cantidad <span className="font-bold">{product.quantity}</span>
        </p>
      </div>
    </div>
  )
}
