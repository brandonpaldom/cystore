import Link from 'next/link'

import clsx from 'clsx'

export default function FilterItem({ href, text, pathname, onClick }) {
  const linkClass = clsx(
    'capitalize',
    pathname === href && 'underline decoration-2 decoration-indigo-600',
  )

  return (
    <li key={href} onClick={onClick}>
      <Link href={href} className={linkClass}>
        {text}
      </Link>
    </li>
  )
}
