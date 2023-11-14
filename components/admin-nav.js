'use client'

import Link from 'next/link'

import Logo from '@/components/logo'

export default function AdminNav() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-xl flex-wrap items-center justify-between px-6">
        <Logo />
      </nav>
    </header>
  )
}
