import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div className="grid h-[100dvh] grid-cols-1 md:grid-cols-2">
      <div className="hidden items-center justify-center bg-white md:flex">
        <Image src="/cystore.svg" alt="Cystore Logo" width={168} height={42} />
      </div>
      <div className="flex flex-col items-center px-6 py-12">{children}</div>
    </div>
  )
}
