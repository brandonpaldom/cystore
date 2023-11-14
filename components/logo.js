import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className }) {
  return (
    <Link href="/" className={className}>
      <Image src="/cystore.svg" alt="Cystore Logo" width={112} height={28} />
    </Link>
  )
}
