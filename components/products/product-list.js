import ProductItem from '@/components/products/product-item'
import { getProductsByCategory } from '@/utils/products'

export default async function ProductList({ category }) {
  const products = await getProductsByCategory(category)

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  )
}
