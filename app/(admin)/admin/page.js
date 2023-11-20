import Link from 'next/link'

import { products } from '@/data/products'

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h2>Manage Products</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b transition-all duration-300 hover:bg-neutral-50">
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
            <tr
              key={product.id}
              className="border-b transition-all duration-300 hover:bg-neutral-50"
            >
              <td className="p-4">{product.name}</td>
              <td className="p-4">${product.price}.00</td>
              <td className="p-4">{product.category}</td>
              <td className="flex gap-2 p-4">
                <Link
                  href={`/admin/products/${product.slug}`}
                  className="btn-sm btn-primary"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/products/${product.slug}`}
                  className="btn-sm btn-outline"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
