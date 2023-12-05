import { useContext } from 'react'
import Image from 'next/image'
import CartContext from '@/context/CartContext'
import Button from '../ui/button'
import { formatCurrency } from '@/lib/format-currency'

export default function CartItem({ cart }) {
  const { addToCart, removeFromCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(cart)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(cart.id)
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-4">
        <Image src={cart.image} alt={cart.name} width={64} height={64} />
        <div>
          <p className="font-bold">{cart.name}</p>
          <p>{formatCurrency(cart.price)}</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-sm">
          Cantidad <span className="font-bold">{cart.quantity}</span>
        </p>
        <div className="flex gap-2">
          <Button size="sm" color="secondary" onClick={handleRemoveFromCart}>
            -
          </Button>
          <Button size="sm" color="secondary" onClick={handleAddToCart}>
            +
          </Button>
        </div>
      </div>
    </div>
  )
}
