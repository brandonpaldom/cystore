import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { getProducts } from '@/utils/products'
import { formatCurrency } from '@/utils/format-currency'
import DeleteProductButton from './delete-product-button'

export default async function ProductsTable() {
  const products = await getProducts()

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {[
              'Imagen',
              'Nombre',
              'Descripción',
              'Precio',
              'Categoría',
              'Acciones',
            ].map((item) => (
              <th
                key={item}
                className="h-12 border-b px-4 text-left font-normal text-neutral-600"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 rounded-lg border border-neutral-100 object-contain"
                  width={64}
                  height={64}
                />
              </td>
              <td className="p-4">{product.name}</td>
              <td className="truncate p-4">{product.description}</td>
              <td className="p-4">{formatCurrency(product.price)}</td>
              <td className="p-4">{product.category}</td>
              <td className="flex gap-2 p-4">
                <Link
                  href={`/admin/products/edit/${product.slug}`}
                  scroll={false}
                >
                  <Button size="sm" color="secondary">
                    Editar
                  </Button>
                </Link>
                <DeleteProductButton slug={product.slug} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
