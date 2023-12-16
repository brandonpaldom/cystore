'use server'

import { redirect } from 'next/navigation'
import { db } from 'lib/firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'

export async function createOrder(formData) {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const email = formData.get('email')
  const address = formData.get('address')
  const city = formData.get('city')
  const state = formData.get('state')
  const zip = formData.get('zip')
  const country = formData.get('country')
  const phone = formData.get('phone')
  const cart = JSON.parse(formData.get('cart'))
  const subtotal = formData.get('subtotal')
  const shipping = formData.get('shipping')
  const total = formData.get('total')
  const createdAt = new Date()

  const order = {
    firstName,
    lastName,
    email,
    address,
    state,
    city,
    zip,
    country,
    phone,
    cart,
    subtotal,
    shipping,
    total,
    createdAt,
  }

  const docRef = await addDoc(collection(db, 'orders'), order)

  redirect(`/order/${docRef.id}`)
}
