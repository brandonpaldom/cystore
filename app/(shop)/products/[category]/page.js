import ProductGrid from '@/components/product-grid'

import { products } from '@/data/products'

export default function Page({ params }) {
  const { category } = params

  const filteredProducts = products.filter((product) => {
    return product.category === category
  })

  return <ProductGrid products={filteredProducts} />
}
