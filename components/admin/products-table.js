import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { getProducts } from '@/utils/products'
import { formatCurrency } from '@/utils/format-currency'

export default async function ProductsTable() {
  const products = await getProducts()

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 rounded-lg border border-neutral-100 object-contain"
                  width={64}
                  height={64}
                />
              </td>
              <td className="max-w-[256px]">
                <p className="w-full truncate">{product.name}</p>
              </td>
              <td className="max-w-[256px]">
                <p className="w-full truncate">{product.description}</p>
              </td>
              <td>
                <p>{formatCurrency(product.price)}</p>
              </td>
              <td>
                <span className="badge badge-secondary">
                  {product.category}
                </span>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/products/edit/${product.slug}`}
                    scroll={false}
                  >
                    <Button size="sm" color="secondary">
                      Editar
                    </Button>
                  </Link>
                  <Link
                    href={`/admin/products/delete/${product.slug}`}
                    scroll={false}
                  >
                    <Button size="sm" color="danger">
                      Eliminar
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
