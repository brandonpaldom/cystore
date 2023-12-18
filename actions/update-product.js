import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { db, storage } from 'lib/firebase/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export async function updateProduct(formData, slug) {
  const name = formData.get('name')
  const description = formData.get('description')
  const price = formData.get('price')
  const image = formData.get('image')
  const category = formData.get('category')
  const newSlug = formData.get('slug')

  if (image.name === '') {
    const productRef = doc(db, 'products', slug)
    const productSnap = await getDoc(productRef)
    const product = productSnap.data()

    const updatedProduct = {
      name,
      description,
      price,
      image: product.image,
      category,
      slug: newSlug,
    }

    await updateDoc(productRef, updatedProduct)

    return { message: 'Product updated' }
  }

  const fileBuffer = await image.arrayBuffer()
  const imageRef = ref(storage, `products/${image.name}`)
  const uploadTask = await uploadBytes(imageRef, fileBuffer)
  const imageUrl = await getDownloadURL(uploadTask.ref)

  const productRef = doc(db, 'products', slug)
  const productSnap = await getDoc(productRef)
  const product = productSnap.data()

  const updatedProduct = {
    name,
    description,
    price,
    image: imageUrl,
    category,
    slug: newSlug,
  }

  await updateDoc(productRef, updatedProduct)

  revalidateTag('products')
}
