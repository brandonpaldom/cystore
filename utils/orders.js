export const getOrderById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/order/${id}`,
    {
      cache: 'force-cache',
    },
  )
  const order = await res.json()

  return order
}
