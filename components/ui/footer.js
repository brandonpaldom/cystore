import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-white">
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Logo />
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Cystore
        </p>
      </nav>
    </footer>
  )
}
