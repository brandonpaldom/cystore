const { products } = require('@/data/products')

export const getProducts = () => {
  return products
}

export const getProduct = (slug) => {
  return products.find((product) => product.slug === slug)
}

export const getFirst8Products = () => {
  return products.slice(0, 8)
}

export const getLast8Products = () => {
  return products.slice(-8)
}

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category)
}
