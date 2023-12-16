import OrderItem from '@/components/order/order-item'
import { getOrderById } from '@/utils/orders'
import { formatFirebaseDate } from '@/utils/format-dates'
import { formatCurrency } from '@/utils/format-currency'

export default async function OrderDetail({ id }) {
  const order = await getOrderById(id)

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-6 rounded-lg bg-white p-6">
      <div className="flex flex-col gap-2">
        <h2>¡Gracias por tu compra!</h2>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-neutral-500">
            Número de pedido:{' '}
            <span className="text-indigo-600">{order.id}</span>
          </p>
          <p className="text-neutral-500">
            Orden realizada el:{' '}
            <span className="text-indigo-600">
              {formatFirebaseDate(order.createdAt)}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {order.cart.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <p className="text-neutral-500">Dirección de envío:</p>
          <p>
            {order.address}, {order.city}, {order.state}
          </p>
          <p>
            {order.zip}, {order.country}
          </p>
        </div>
        <div>
          <p className="text-neutral-500">Datos de contacto:</p>
          <p>
            {order.firstName} {order.lastName}
          </p>
          <p>{order.email}</p>
          <p>{order.phone}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-4">
            <p className="text-neutral-500">Subtotal:</p>
            <p>{formatCurrency(order.subtotal)}</p>
          </div>
          <div className="flex justify-between gap-4">
            <p className="text-neutral-500">Envío:</p>
            <p>
              {order.shipping === 0
                ? 'Gratis'
                : `${formatCurrency(order.shipping)}`}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <p className="text-neutral-500">Total:</p>
            <p>{formatCurrency(order.total)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
