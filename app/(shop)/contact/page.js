import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-lg">
        This page is under construction. Please check back later.
      </p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
