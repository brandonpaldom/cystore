import Image from 'next/image'

import Button from './button'

import { formatCurrency } from '@/lib/format-currency'

export default function CartItem({ product }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-4">
        <Image
          src={product.image}
          alt={product.name}
          width={64}
          height={64}
        />
        <div>
          <p className="font-bold">{product.name}</p>
          <p>{formatCurrency(product.price)}</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <Button size="sm" color="ghost">
          Eliminar
        </Button>
        <p className="text-sm">
          Cantidad <span className="font-bold">1</span>
        </p>
      </div>
    </div>
  )
}
