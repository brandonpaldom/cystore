import { GeistSansNonVariable } from 'geist/font/sans-non-variable'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Cystore',
  description:
    'Explora lo último en tecnología avanzada, donde la innovación y el diseño elegante se fusionan para revolucionar tu mundo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSansNonVariable.className} bg-neutral-100 antialiased`}
      >
        <ClerkProvider>
          <CartProvider>{children}</CartProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
