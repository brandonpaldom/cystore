import { products } from '@/data/products'

import ProductGrid from '@/components/ui/product-grid'

export default function Page() {
  return <ProductGrid products={products} />
}
