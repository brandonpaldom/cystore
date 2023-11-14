import AdminNav from '@/components/admin-nav'
import Footer from '@/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <AdminNav />
      <main className="mx-auto min-h-[calc(100dvh-8rem)] max-w-screen-xl px-6">
        {children}
      </main>
      <Footer />
    </>
  )
}
