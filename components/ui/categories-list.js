import Link from 'next/link'

export default async function CategoriesList() {
  const categories = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  }).then((res) => res.json())

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {categories.map((category) => (
        <Link
          href={`/products/${category.slug}`}
          key={category.slug}
          className="h-16 rounded-lg bg-neutral-50 px-4 py-2 capitalize transition-shadow duration-300 hover:bg-neutral-100"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
