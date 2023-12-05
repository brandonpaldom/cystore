'use client'

import { useState } from 'react'
import Button from './button'

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-[400px] flex-col gap-6"
    >
      <label className="block">
        <span className="text-neutral-700">Nombre</span>
        <input type="text" name="fullName" required onChange={handleChange} />
      </label>
      <label className="block">
        <span className="text-neutral-700">Correo electrónico</span>
        <input type="email" name="email" required onChange={handleChange} />
      </label>
      <label className="block">
        <span className="text-neutral-700">Teléfono</span>
        <input type="tel" name="phone" required onChange={handleChange} />
      </label>
      <label className="block">
        <span className="text-neutral-700">Mensaje</span>
        <textarea rows={3} name="message" required onChange={handleChange} />
      </label>
      <Button type="submit">Enviar mensaje</Button>
    </form>
  )
}
