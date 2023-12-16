'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import Button from '@/components/ui/button'

export default function AddToCart({ product }) {
  const { addToCart, isInCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  if (isInCart(product.id)) {
    return (
      <div className="flex flex-col gap-4 md:flex-row">
        <Link href="/cart">
          <Button>Ir al carrito</Button>
        </Link>
        <Link href="/products/all">
          <Button color="secondary">Seguir comprando</Button>
        </Link>
      </div>
    )
  }

  return <Button onClick={handleAddToCart}>Agregar al carrito</Button>
}
