import Link from 'next/link'

import { products } from '@/data/products'
import Button from '@/components/ui/button'
import { formatCurrency } from '@/lib/format-currency'

export default function Page() {
  return (
    <div className="card flex flex-col gap-4">
      <h2>Manage Products</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            {['Name', 'Price', 'Category', 'Actions'].map((item) => (
              <th
                key={item}
                className="h-12 px-4 text-left font-normal text-neutral-600"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{product.name}</td>
              <td className="p-4">{formatCurrency(product.price)}</td>
              <td className="p-4">{product.category}</td>
              <td className="flex gap-2 p-4">
                <Button size="sm" color="primary">
                  Edit
                </Button>
                <Button size="sm" color="ghost">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
