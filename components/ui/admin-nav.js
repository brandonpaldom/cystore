'use client'

import Logo from '@/components/ui/logo'
import Link from 'next/link'

export default function AdminNav() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-2xl flex-wrap items-center justify-between px-6">
        <Logo />
        <Link href="/" className="btn-sm btn-secondary">
          Cerrar sesión
        </Link>
      </nav>
    </header>
  )
}
