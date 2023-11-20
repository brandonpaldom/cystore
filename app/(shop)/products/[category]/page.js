import ProductGrid from '@/components/ui/product-grid'

import { getProductsByCategory } from '@/lib/products'

export default function Page({ params }) {
  const { category } = params

  return <ProductGrid products={getProductsByCategory(category)} />
}
