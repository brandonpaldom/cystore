export const getOrderById = async (id) => {
  const res = await fetch(`${process.env.VERCEL_URL}/order/${id}`, {
    cache: 'force-cache',
  })
  const order = await res.json()

  return order
}
