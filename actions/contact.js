import { db } from '@/lib/firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'

export async function contact(formData) {
  const fullName = formData.get('fullName')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message')

  const contact = {
    fullName,
    email,
    phone,
    message,
  }

  await setDoc(doc(db, 'contact', fullName), contact)

  return { message: 'Contact created' }
}
