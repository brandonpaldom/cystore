'use client'

import { useRef } from 'react'
import { useCart } from '@/hooks/useCart'
import Button from '@/components/ui/button'
import { createOrder } from '@/actions/create-order'

export default function CartForm() {
  const { cart, subtotal, shipping, total } = useCart()
  const formRef = useRef(null)

  async function formAction(formData) {
    await createOrder(formData)
    formRef.current?.reset()
  }

  return (
    <section className="card flex flex-col gap-4">
      <h3>Envío</h3>
      <form action={formAction} className="flex flex-col gap-4">
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input type="hidden" name="subtotal" value={subtotal} />
        <input type="hidden" name="shipping" value={shipping} />
        <input type="hidden" name="total" value={total} />
        <div className="flex gap-4">
          <label className="block w-full">
            <span className="text-neutral-700">Nombre</span>
            <input type="text" name="firstName" required />
          </label>
          <label className="block w-full">
            <span className="text-neutral-700">Apellido</span>
            <input type="text" name="lastName" required />
          </label>
        </div>
        <label className="block">
          <span className="text-neutral-700">Correo electrónico</span>
          <input type="email" name="email" required />
        </label>
        <label className="block">
          <span className="text-neutral-700">Dirección</span>
          <input type="text" name="address" required />
        </label>
        <div className="flex gap-4">
          <label className="block w-full">
            <span className="text-neutral-700">Ciudad</span>
            <input type="text" name="city" required />
          </label>
          <label className="block w-full">
            <span className="text-neutral-700">Estado</span>
            <input type="text" name="state" required />
          </label>
        </div>
        <div className="flex gap-4">
          <label className="block w-full">
            <span className="text-neutral-700">Código postal</span>
            <input type="text" name="zip" required />
          </label>
          <label className="block w-full">
            <span className="text-neutral-700">País</span>
            <input type="text" name="country" required />
          </label>
        </div>
        <label className="block">
          <span className="text-neutral-700">Teléfono</span>
          <input type="text" name="phone" required />
        </label>
        <Button type="submit">Realizar pedido</Button>
      </form>
    </section>
  )
}
