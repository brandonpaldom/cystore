'use client'

import { useCart } from '@/hooks/useCart'
import Button from '@/components/ui/button'
import CartItem from '@/components/cart/cart-item'
import CartSummary from '@/components/cart/cart-summary'
import CartForm from '@/components/cart/cart-form'
import EmptyCart from '@/components/cart/empty-cart'

export default function Cart() {
  const { cart, clearCart } = useCart()

  if (!cart.length) {
    return <EmptyCart />
  }

  return (
    <div className="mx-auto grid w-full max-w-[40rem] grid-cols-1 gap-4 md:max-w-screen-lg lg:w-full lg:grid-cols-[auto,320px]">
      <section className="card flex flex-col gap-4">
        <h2>Mi carrito</h2>
        <div className="flex flex-col gap-4">
          {cart.map((product) => (
            <CartItem key={product.id} cart={product} />
          ))}
        </div>
        <Button color="secondary" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </section>
      <CartSummary />
      <CartForm />
    </div>
  )
}
