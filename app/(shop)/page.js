import { Suspense } from 'react'
import MainHero from '@/components/ui/main-hero'
import CategoriesList from '@/components/ui/categories-list'
import RelatedProducts from '@/components/products/related-products'
import CategoriesLoader from '@/components/loaders/categories-loader'
import RelatedProductsLoader from '@/components/loaders/related-products-loader'

export default async function Page() {
  return (
    <>
      <MainHero />
      <section className="card mt-8 flex flex-col gap-6">
        <h2 className="text-center">Explorar por categorías</h2>
        <Suspense fallback={<CategoriesLoader />}>
          <CategoriesList />
        </Suspense>
      </section>
      <section className="mt-8 flex flex-col gap-6">
        <h2>Productos nuevos</h2>
        <Suspense fallback={<RelatedProductsLoader />}>
          <RelatedProducts />
        </Suspense>
      </section>
    </>
  )
}
