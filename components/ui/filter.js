'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'

import { categories } from '@/data/categories'

import ListItem from './filter-item'
import FilterListIcon from '../icons/filter-list'

export default function Filter() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  function toggleShow() {
    setShow(!show)
  }

  return (
    <>
      <section className="flex flex-col gap-4 rounded-lg bg-white p-4 md:hidden">
        <button className="icon-btn btn-secondary" onClick={toggleShow}>
          <FilterListIcon />
        </button>
        {show && (
          <div className="flex w-full flex-col gap-2">
            <p className="font-bold">Categorías</p>
            <ul className="grid grid-cols-2 gap-2">
              <ListItem href="/products" text="Todas" pathname={pathname} />
              {categories.map((category) => (
                <ListItem
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  text={category.name}
                  pathname={pathname}
                />
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="hidden h-max w-[320px] flex-col gap-2 rounded-lg bg-white p-4 md:flex">
        <p className="font-bold">Categorías</p>
        <ul className="flex flex-col">
          <ListItem href="/products" text="Todas" pathname={pathname} />
          {categories.map((category) => (
            <ListItem
              key={category.slug}
              href={`/products/${category.slug}`}
              text={category.name}
              pathname={pathname}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
