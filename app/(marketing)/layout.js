import ShopNav from '@/components/ui/shop-nav'
import Footer from '@/components/ui/footer'

export const metadata = {
  title: 'Contacto | Cystore',
  description: 'Contáctanos para cualquier duda o comentario.',
}

export default function Layout({ children }) {
  return (
    <>
      <ShopNav />
      <main className="mx-auto min-h-[calc(100dvh-8rem)] max-w-screen-2xl bg-blur bg-cover bg-center p-6">
        {children}
      </main>
      <Footer />
    </>
  )
}
