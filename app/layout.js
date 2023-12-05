import { GeistSansNonVariable } from 'geist/font/sans-non-variable'
import './globals.css'
import CartProvider from '@/context/CartProvider'

export const metadata = {
  title: 'Cystore',
  description: 'A simple e-commerce store built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSansNonVariable.className} bg-neutral-100 antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
