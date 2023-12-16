import Link from 'next/link'
import categories from '@/data/categories'

export default function CategoriesList() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {categories.map((category) => (
        <Link
          href={`/products/${category.slug}`}
          key={category.slug}
          className="h-16 rounded-lg bg-indigo-50 px-4 py-2 font-medium capitalize text-indigo-600 transition-colors duration-300 hover:bg-indigo-100"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
