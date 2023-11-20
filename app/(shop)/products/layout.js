import Filter from '@/components/ui/filter'

export default async function ProductsLayout({ children }) {
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <Filter />
      {children}
    </section>
  )
}
