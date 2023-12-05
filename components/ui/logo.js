import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className }) {
  return (
    <Link href="/" className={className}>
      <Image src="/cystore.svg" alt="Cystore Logo" width={112} height={28} />
    </Link>
  )
}
