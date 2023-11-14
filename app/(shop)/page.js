import Hero from '@/components/hero'

import { categories } from '@/data/categories'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <Link href="/products">All</Link>
          {categories.map((category) => (
            <Link href={`/products/${category}`} key={category}>
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
