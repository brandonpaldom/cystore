export default function RelatedProductsLoader() {
  const loaders = Array(8).fill(null)

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-auto pb-6">
      {loaders.map((_, index) => (
        <div
          className="min-w-[15rem] snap-start snap-always rounded-lg bg-white transition-shadow duration-300 hover:shadow-md"
          key={index}
        >
          <div className="animate-pulse">
            <div className="p-4">
              <div className="h-4 w-3/4 rounded bg-neutral-200"></div>
              <div className="mt-2 h-4 w-1/2 rounded bg-neutral-200"></div>
            </div>
            <div className="h-60 rounded-b-lg bg-neutral-200"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
