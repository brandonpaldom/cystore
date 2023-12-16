import Link from 'next/link'
import Button from '@/components/ui/button'
import ProductsTable from '@/components/admin/products-table'

export default function Page() {
  return (
    <section className="card flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2>Administrar productos</h2>
        <Link href="/admin/products/create" scroll={false}>
          <Button>Crear producto</Button>
        </Link>
      </div>
      <ProductsTable />
    </section>
  )
}
