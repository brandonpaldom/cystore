export const getOrderById = async (id) => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/order/${id}`,
    {
      cache: 'force-cache',
    },
  )
  const order = await res.json()

  return order
}
