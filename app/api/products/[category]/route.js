import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const { category } = params

  const q =
    category === 'all'
      ? query(collection(db, 'products'))
      : query(collection(db, 'products'), where('category', '==', category))

  const querySnapshot = await getDocs(q)

  const products = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })

  return NextResponse.json(products)
}
