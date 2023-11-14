import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-50 px-4 text-center">
      <h2 className="text-4xl font-bold">Cart</h2>
      <p className="text-lg">Your cart is empty</p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
