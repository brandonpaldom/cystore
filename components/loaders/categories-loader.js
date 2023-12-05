export default function CategoriesLoader() {
  const loaders = Array(8).fill(null)

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {loaders.map((_, i) => (
        <div key={i} className="h-16 animate-pulse rounded-lg bg-neutral-200" />
      ))}
    </div>
  )
}
