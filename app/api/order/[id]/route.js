import { NextResponse } from 'next/server'
import { db } from 'lib/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const { id } = params
  const docRef = doc(db, 'orders', id)
  const docSnap = await getDoc(docRef)

  return NextResponse.json({ ...docSnap.data(), id: docSnap.id })
}
