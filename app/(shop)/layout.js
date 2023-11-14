import Footer from '@/components/footer'
import ShopNav from '@/components/shop-nav'

export default function Layout({ children }) {
  return (
    <>
      <ShopNav />
      <main className="mx-auto min-h-[calc(100dvh-8rem)] max-w-screen-xl px-6">
        {children}
      </main>
      <Footer />
    </>
  )
}
