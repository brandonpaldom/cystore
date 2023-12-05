'use client'

import { useContext } from 'react'
import Link from 'next/link'
import CartContext from '@/context/CartContext'
import Button from '../ui/button'
import CartItem from './cart-item'
import { formatCurrency } from '@/lib/format-currency'

export default function Cart() {
  const { cart, clearCart, subtotal, shipping, total } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <section className="flex flex-col items-center gap-8 rounded-lg p-6">
        <h1>Tu carrito está vacío</h1>
        <Link href="/products/all">
          <Button>Ir a la tienda</Button>
        </Link>
      </section>
    )
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
      <section className="card flex flex-col gap-4 lg:sticky lg:top-4 lg:row-span-3 lg:h-max">
        <h3>Resumen</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>{shipping === 0 ? 'Gratis' : formatCurrency(shipping)}</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{formatCurrency(total)}</p>
        </div>
        <Button>Realizar pedido</Button>
      </section>
      <section className="card flex flex-col gap-4">
        <h3>Envío</h3>
        <div className="flex flex-col gap-4">
          <label className="block">
            <span className="text-neutral-700">Nombre</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Correo electrónico</span>
            <input type="email" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Dirección</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Ciudad</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Estado</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Código postal</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">País</span>
            <select>
              <option value="mx">México</option>
              <option value="ar">Argentina</option>
            </select>
          </label>
        </div>
      </section>
      <section className="card flex flex-col gap-4">
        <h3>Pago</h3>
        <div className="flex flex-col gap-4">
          <label className="block">
            <span className="text-neutral-700">Nombre en la tarjeta</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Número de tarjeta</span>
            <input type="text" />
          </label>
          <div className="flex gap-4">
            <label className="block">
              <span className="text-neutral-700">Fecha de expiración</span>
              <input type="text" />
            </label>
            <label className="block">
              <span className="text-neutral-700">Código de seguridad</span>
              <input type="text" />
            </label>
          </div>
        </div>
      </section>
    </div>
  )
}
