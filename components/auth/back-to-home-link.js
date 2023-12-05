import Link from 'next/link'

export default function BackToHomeLink() {
  return (
    <Link
      href="/"
      className="text-sm font-medium text-indigo-600 transition-transform duration-300 hover:-translate-x-2"
    >
      &larr; Volver a la tienda
    </Link>
  )
}
