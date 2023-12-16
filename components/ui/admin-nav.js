'use client'

import Logo from '@/components/ui/logo'
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function AdminNav() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-2xl flex-wrap items-center justify-between px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
