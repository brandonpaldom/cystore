import InfoIcon from '@/components/icons/info'
import InventoryIcon from '@/components/icons/inventory'
import LocalShippingIcon from '@/components/icons/local-shipping'

export const metadata = {
  title: 'Nosotros | Cystore',
  description: 'Conectamos a las personas con la tecnología.',
}

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto mt-16 max-w-screen-md text-center">
        <p className="text-sm font-medium uppercase text-indigo-500">
          Nuestra misión
        </p>
        <h1>Conectamos a las personas con la tecnología</h1>
        <p className="mt-4 text-xl">
          Explora lo último en tecnología avanzada, donde la innovación y el
          diseño elegante se fusionan para revolucionar tu mundo.
        </p>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-8 text-center md:flex-row">
        <div className="max-w-xs">
          <LocalShippingIcon className="mx-auto text-indigo-500" />
          <p className="mt-2 text-lg font-bold">Envíos rápidos</p>
          <p className="text-neutral-700">
            Envíos de 2 a 5 días hábiles en nuestros productos.
          </p>
        </div>
        <div className="max-w-xs">
          <InventoryIcon className="mx-auto text-indigo-500" />
          <p className="mt-2 text-lg font-bold">Envíos sin costo</p>
          <p className="text-neutral-700">
            Envíos sin costo en compras mayores a $999.
          </p>
        </div>
        <div className="max-w-xs">
          <InfoIcon className="mx-auto text-indigo-500" />
          <p className="mt-2 text-lg font-bold">Devoluciones</p>
          <p className="text-neutral-700">
            Devolución sin costo los primeros 7 días a partir de la compra.
          </p>
        </div>
      </div>
    </div>
  )
}
