export const getProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/all`,
    {
      next: {
        tags: ['products'],
      },
    },
  )

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const products = await res.json()

  return products
}

export const getProductsByCategory = async (category) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${category}`,
  )

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const products = await res.json()

  return products
}

export const getProductBySlug = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${slug}`,
    {
      cache: 'no-store',
    },
  )

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const product = await res.json()

  return product
}

export const getRelatedProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/all`)

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const products = await res.json()

  return products.slice(0, 8)
}
