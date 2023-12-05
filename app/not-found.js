import Link from 'next/link'
import ShopNav from '@/components/ui/shop-nav'
import Footer from '@/components/ui/footer'

export default function NotFound() {
  return (
    <>
      <ShopNav />
      <div className="flex h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-50 px-4 text-center">
        <h2 className="text-4xl font-bold">Not Found</h2>
        <p className="text-lg">Could not find requested resource</p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
      <Footer />
    </>
  )
}
