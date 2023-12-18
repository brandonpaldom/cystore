import NoPermissions from '@/components/admin/no-permissions'
import AdminNav from '@/components/ui/admin-nav'
import Footer from '@/components/ui/footer'
import { Protect } from '@clerk/nextjs'

export const metadata = {
  title: 'Panel de administración | Cystore',
  description: 'Administra tu tienda.',
}

export default function Layout({ children }) {
  return (
    <>
      <AdminNav />
      <main className="mx-auto min-h-[calc(100dvh-8rem)] max-w-screen-2xl p-6">
        <Protect role="admin" fallback={<NoPermissions />}>
          {children}
        </Protect>
      </main>
      <Footer />
    </>
  )
}
