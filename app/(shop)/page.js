import Link from 'next/link'

import CategoryItem from '@/components/ui/category-item'
import RelatedProducts from '@/components/ui/related-products'

import { categories } from '@/data/categories'

import { getLast8Products } from '@/lib/products'

export default function Page() {
  return (
    <>
      <section className="bg-main-hero flex flex-col items-center justify-center rounded-lg bg-cover bg-center p-6 md:h-[30rem]">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center text-center text-white">
          <h1>El futuro al alcance de tu mano</h1>
          <p className="mt-4 text-[1.25rem]">
            Explora lo último en tecnología avanzada, donde la innovación y el
            diseño elegante se fusionan para revolucionar tu mundo.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link className="btn btn-primary" href="/products">
              Comprar ahora
            </Link>
            <Link className="btn btn-secondary" href="/about">
              Más información
            </Link>
          </div>
        </div>
      </section>
      <section className="card mt-8 flex flex-col gap-6">
        <h2 className="text-center">Explorar por categorías</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <CategoryItem href="/products">all</CategoryItem>
          {categories.map((category) => (
            <CategoryItem
              href={`/products/${category.slug}`}
              key={category.slug}
            >
              {category.name}
            </CategoryItem>
          ))}
        </div>
      </section>
      <section className="mt-8 flex flex-col gap-6">
        <h2>Productos nuevos</h2>
        <RelatedProducts products={getLast8Products()} />
      </section>
    </>
  )
}
