import ProductItem from './product-item'

export default function ProductGrid({ products }) {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </section>
  )
}
