import Link from 'next/link'

export default function CategoryItem({ href, children }) {
  return (
    <Link
      href={href}
      className="h-16 rounded-lg bg-neutral-50 px-4 py-2 capitalize transition-shadow duration-300 hover:bg-neutral-100"
    >
      {children}
    </Link>
  )
}
