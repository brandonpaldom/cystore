import Button from '@/components/ui/button'
import CartItem from '@/components/ui/cart-item'

import { products } from '@/data/products'

import { formatCurrency } from '@/lib/format-currency'

export default function Page() {
  return (
    <div className="mx-auto grid w-full max-w-[40rem] grid-cols-1 gap-4 md:max-w-screen-lg lg:w-full lg:grid-cols-[auto,320px]">
      <section className="card flex flex-col gap-4">
        <h2>Mi carrito</h2>
        <CartItem product={products[3]} />
        <CartItem product={products[7]} />
      </section>
      <section className="card flex flex-col gap-4 lg:sticky lg:top-4 lg:row-span-3 lg:h-max">
        <h3>Resumen</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatCurrency(1000)}</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>{formatCurrency(0)}</p>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>{formatCurrency(1000)}</p>
        </div>
        <Button>Realizar pedido</Button>
      </section>
      <section className="card flex flex-col gap-4">
        <h3>Envío</h3>
        <div className="grid grid-cols-1 gap-4">
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
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-neutral-700">Nombre en la tarjeta</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Número de tarjeta</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Fecha de expiración</span>
            <input type="text" />
          </label>
          <label className="block">
            <span className="text-neutral-700">Código de seguridad</span>
            <input type="text" />
          </label>
        </div>
      </section>
    </div>
  )
}
