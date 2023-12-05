import ProductList from '@/components/products/product-list'

export default function Page({ params }) {
  const { category } = params

  return <ProductList category={category} />
}

export async function generateStaticParams() {
  return [
    { category: 'all' },
    { category: 'tv-media' },
    { category: 'xiaomi' },
    { category: 'pad' },
    { category: 'wereables' },
    { category: 'smart-device' },
    { category: 'smart-home' },
    { category: 'wereables-vehicle' },
  ]
}
