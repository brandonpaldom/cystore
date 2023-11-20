'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import ListItem from '@/components/ui/filter-item'
import Logo from '@/components/ui/logo'
import MenuIcon from '@/components/icons/menu'
import ShoppingCartIcon from '@/components/icons/shopping-cart'

import { shopNav } from '@/data/shop-nav'

import clsx from 'clsx'

export default function ShopNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-2xl flex-wrap items-center justify-between px-6">
        <Logo className="order-2 md:order-1" />
        <button className="order-1 md:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <ul className="hidden items-center gap-4 md:order-2 md:flex">
          {shopNav.map(({ href, text }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  pathname === href &&
                    'underline decoration-indigo-500 decoration-2',
                )}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="order-3 flex items-center gap-4">
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
          <Link href="/admin" className="btn-sm btn-ghost">
            Acceder
          </Link>
        </div>
      </nav>

      <div
        className={clsx(
          'absolute left-0 top-16 z-10 w-full border-t border-neutral-100 bg-white shadow-lg md:hidden',
          !isMenuOpen && 'hidden',
        )}
      >
        <ul className="flex flex-col gap-4 p-6">
          {shopNav.map(({ href, text }) => (
            <ListItem
              key={href}
              href={href}
              text={text}
              pathname={pathname}
              onClick={toggleMenu}
            />
          ))}
        </ul>
      </div>
    </header>
  )
}