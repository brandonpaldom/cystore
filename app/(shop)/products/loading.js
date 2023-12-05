export default function Loading() {
  const loaders = Array(8).fill(null)

  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {loaders.map((_, index) => (
        <div className="rounded-lg bg-white" key={index}>
          <div className="animate-pulse">
            <div className="p-4">
              <div className="h-4 w-3/4 rounded bg-neutral-200"></div>
              <div className="mt-2 h-4 w-1/2 rounded bg-neutral-200"></div>
            </div>
            <div className="aspect-square w-full rounded-b-lg bg-neutral-200"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
