import { useCart } from '@/hooks/useCart'
import { formatCurrency } from '@/utils/format-currency'

export default function CartSummary() {
  const { subtotal, shipping, total } = useCart()

  return (
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
    </section>
  )
}
