import { Suspense } from 'react'
import ProductDetail from '@/components/product/product-detail'
import RelatedProducts from '@/components/products/related-products'
import ProductDetailLoader from '@/components/loaders/product-detail-loader'
import RelatedProductsLoader from '@/components/loaders/related-products-loader'

export default async function Page({ params }) {
  const { slug } = params

  return (
    <div className="flex flex-col gap-8">
      <Suspense fallback={<ProductDetailLoader />}>
        <ProductDetail slug={slug} />
      </Suspense>
      <section className="flex flex-col gap-4">
        <h2>Productos relacionados</h2>
        <Suspense fallback={<RelatedProductsLoader />}>
          <RelatedProducts />
        </Suspense>
      </section>
    </div>
  )
}
