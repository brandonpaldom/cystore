'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'

import ListItem from './list-item'
import FilterListIcon from './icons/filter-list'

export default function Filter({ categories }) {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  function toggleShow() {
    setShow(!show)
  }

  return (
    <>
      {/* Mobile */}
      <section className="flex flex-col gap-4 md:hidden">
        <button className="icon-btn" onClick={toggleShow}>
          <FilterListIcon />
        </button>
        {show && (
          <div className="flex w-full flex-col gap-2 rounded-lg border bg-white p-6">
            <h2 className="font-bold">Collections</h2>
            <ul className="grid grid-cols-2 gap-2">
              <ListItem href="/products" text="All" pathname={pathname} />
              {categories.map((category) => (
                <ListItem
                  key={category}
                  href={`/products/${category}`}
                  text={category}
                  pathname={pathname}
                />
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Desktop */}
      <section className="hidden h-max w-[320px] flex-col gap-2 rounded-lg border p-6 md:flex">
        <h2 className="font-bold">Collections</h2>
        <ul className="flex flex-col">
          <ListItem href="/products" text="All" pathname={pathname} />
          {categories.map((category) => (
            <ListItem
              key={category}
              href={`/products/${category}`}
              text={category}
              pathname={pathname}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
