import { products } from '@/data/products'

import ProductGrid from '@/components/product-grid'

export default function Page() {
  return <ProductGrid products={products} />
}
