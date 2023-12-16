import { Suspense } from 'react'
import OrderDetail from '@/components/order/order-detail'
import Loader from '@/components/loaders/loader'

export const metadata = {
  title: 'Detalle de orden | Cystore',
  description: 'Revisa el detalle de una orden.',
}

export default function Page({ params }) {
  const { id } = params

  return (
    <Suspense fallback={<Loader />}>
      <OrderDetail id={id} />
    </Suspense>
  )
}
