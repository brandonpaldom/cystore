import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-50 px-4 text-center">
      <h2 className="text-4xl font-bold">Checkout</h2>
      <p className="text-lg">
        This page is under construction. Please check back later.
      </p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
