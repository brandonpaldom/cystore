'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db, storage } from 'lib/firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export async function createProduct(formData) {
  const name = formData.get('name')
  const description = formData.get('description')
  const price = formData.get('price')
  const image = formData.get('image')
  const category = formData.get('category')
  const slug = formData.get('slug')

  const fileBuffer = await image.arrayBuffer()
  const imageRef = ref(storage, `products/${image.name}`)
  const uploadTask = await uploadBytes(imageRef, fileBuffer)
  const imageUrl = await getDownloadURL(uploadTask.ref)

  const product = {
    name,
    description,
    price,
    image: imageUrl,
    category,
    slug,
  }

  await setDoc(doc(db, 'products', slug), product)

  revalidatePath('/admin/products')
  redirect('/admin/products')
}
