'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import ListItem from '@/components/list-item'
import Logo from '@/components/logo'
import MenuIcon from '@/components/icons/menu'
import ShoppingCartIcon from '@/components/icons/shopping-cart'

import { shopNav } from '@/data/shop-nav'
import { categories } from '@/data/categories'

import clsx from 'clsx'

export default function ShopNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-xl flex-wrap items-center justify-between px-6">
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
        <Link href="/cart" className="order-3">
          <ShoppingCartIcon />
        </Link>
      </nav>

      <div
        className={clsx(
          'absolute left-0 top-16 z-10 w-full bg-neutral-50',
          'md:hidden',
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
        <div className="flex flex-col gap-4 p-6">
          <h2 className="text-lg font-bold">Collections</h2>
          <ul className="flex flex-col gap-4">
            {categories.map((category) => (
              <ListItem
                key={category}
                href={category}
                text={category}
                pathname={pathname}
                onClick={toggleMenu}
              />
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
