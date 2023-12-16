import Filter from '@/components/ui/filter'

export const metadata = {
  title: 'Tienda | Cystore',
  description:
    'Explora lo último en tecnología avanzada, donde la innovación y el diseño elegante se fusionan para revolucionar tu mundo.',
}

export default async function ProductsLayout({ children }) {
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <Filter />
      {children}
    </section>
  )
}
