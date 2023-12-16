import Link from 'next/link'
import ShopNav from '@/components/ui/shop-nav'
import Button from '@/components/ui/button'
import Footer from '@/components/ui/footer'
import InfoIcon from '@/components/icons/info'

export const metadata = {
  title: 'Página no encontrada | Cystore',
  description: 'Página no encontrada.',
}

export default function NotFound() {
  return (
    <>
      <ShopNav />
      <div className="flex h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-4 rounded-lg bg-neutral-50 px-4 text-center">
        <InfoIcon width={48} height={40} className="text-indigo-600" />
        <h1>Página no encontrada</h1>
        <Link href="/">
          <Button>Regresar al inicio</Button>
        </Link>
      </div>
      <Footer />
    </>
  )
}
