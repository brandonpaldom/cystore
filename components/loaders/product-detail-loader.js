export default function ProductDetailLoader() {
  return (
    <section className="rounded-lg bg-white p-6">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:flex-row">
        <div className="animate-pulse">
          <div className="aspect-square w-full rounded-lg bg-neutral-200"></div>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-full animate-pulse">
            <div className="h-4 w-1/4 rounded bg-neutral-200"></div>
            <div className="mt-2 h-12 w-full rounded bg-neutral-200"></div>
            <div className="mt-2 h-8 w-1/2 rounded bg-neutral-200"></div>
            <div className="mt-6 h-4 w-full rounded bg-neutral-200"></div>
            <div className="mt-2 h-4 w-full rounded bg-neutral-200"></div>
            <div className="mt-2 h-4 w-1/2 rounded bg-neutral-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
