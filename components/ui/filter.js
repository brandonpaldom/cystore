'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import FilterItem from '@/components/ui/filter-item'
import FilterListIcon from '@/components/icons/filter-list'
import categories from '@/data/categories.json'

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
              {categories.map((category) => (
                <FilterItem
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

      <section className="hidden h-max min-w-[200px] flex-col gap-2 rounded-lg bg-white p-4 md:flex">
        <p className="font-bold">Categorías</p>
        <ul className="flex flex-col">
          {categories.map((category) => (
            <FilterItem
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
