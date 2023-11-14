import Image from 'next/image'
import Link from 'next/link'

import { products } from '@/data/products'

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">
        Welcome, <span className="text-indigo-600">Admin</span>
      </h2>
      <table class="w-full border-collapse rounded-lg border border-neutral-400 bg-white text-sm shadow-sm">
        <thead class="bg-neutral-50">
          <tr>
            {[
              'Name',
              'Price',
              'Category',
              'Description',
              'Image',
              'Actions',
            ].map((item) => (
              <th
                key={item}
                class="border border-neutral-300 p-4 text-left font-semibold text-neutral-900"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                {product.name}
              </td>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                ${product.price}.00
              </td>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                {product.category}
              </td>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                {product.description}
              </td>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                <Image
                  src={product.image}
                  className="rounded-lg"
                  width={80}
                  height={80}
                  alt={product.name}
                />
              </td>
              <td class="border border-neutral-300 p-4 text-neutral-500">
                <Link href={`/admin/products/${product.slug}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
