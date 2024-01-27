import { db, storage } from '@/lib/firebase/firebase'
import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'

export async function deleteProduct(slug) {
  const productRef = doc(db, 'products', slug)
  const productDoc = await getDoc(productRef)
  const product = productDoc.data()
  await deleteDoc(productRef)
  await deleteObject(ref(storage, product.image))
}
