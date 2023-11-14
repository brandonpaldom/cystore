import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
        <Logo />
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
