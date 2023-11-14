import ProductItem from './product-item'

export default function ProductGrid({ products }) {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </section>
  )
}
