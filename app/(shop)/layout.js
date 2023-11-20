import Footer from '@/components/ui/footer'
import ShopNav from '@/components/ui/shop-nav'

export default function Layout({ children }) {
  return (
    <>
      <ShopNav />
      <main className="mx-auto min-h-[calc(100dvh-8rem)] max-w-screen-2xl p-6">
        {children}
      </main>
      <Footer />
    </>
  )
}
