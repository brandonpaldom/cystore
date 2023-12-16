'use client'

import { useRef } from 'react'
import { redirect } from 'next/navigation'
import Button from '@/components/ui/button'
import { contact } from '@/actions/contact'

export default function ContactForm() {
  const formRef = useRef(null)

  async function formAction(formData) {
    await contact(formData)
    formRef.current?.reset()
    redirect('/contact/success')
  }

  return (
    <form
      action={formAction}
      className="mt-8 flex w-full max-w-[480px] flex-col gap-6 rounded-lg bg-white p-6"
    >
      <label className="block">
        <span className="text-neutral-700">Nombre</span>
        <input type="text" name="fullName" required />
      </label>
      <label className="block">
        <span className="text-neutral-700">Correo electrónico</span>
        <input type="email" name="email" required />
      </label>
      <label className="block">
        <span className="text-neutral-700">Teléfono</span>
        <input type="tel" name="phone" required />
      </label>
      <label className="block">
        <span className="text-neutral-700">Mensaje</span>
        <textarea rows={3} name="message" required />
      </label>
      <Button type="submit">Enviar</Button>
    </form>
  )
}
