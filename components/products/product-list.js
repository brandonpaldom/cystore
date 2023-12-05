import ProductItem from './product-item'

export default async function ProductList({ category }) {
  const res = await fetch(`http://localhost:3000/api/products/${category}`)
  const products = await res.json()

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  )
}
