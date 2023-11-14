import Filter from '@/components/filter'

import { categories } from '@/data/categories'

export default function ProductsLayout({ children }) {
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <Filter categories={categories} />
      {children}
    </section>
  )
}
