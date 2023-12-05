import { NextResponse } from 'next/server'
import categories from '@/data/categories.json'

export const dynamic = 'force-dynamic'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function GET() {
  await delay(1000)

  return NextResponse.json(categories)
}
