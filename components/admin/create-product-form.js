'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import { createProduct } from '@/actions/create-product'

export default function CreateProductForm() {
  const router = useRouter()
  const formRef = useRef(null)

  const close = () => {
    router.back()
  }

  async function formAction(formData) {
    await createProduct(formData)
    formRef.current?.reset()
    close()
  }

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6">
          <div className="card flex w-full max-w-[480px] flex-col gap-4">
            <h2>Añadir un producto</h2>
            <form action={formAction} className="flex flex-col gap-6">
              <label className="block">
                <span className="text-neutral-700">Nombre</span>
                <input type="text" name="name" required />
              </label>
              <label className="block">
                <span className="text-neutral-700">Descripción</span>
                <textarea rows={3} name="description" required />
              </label>
              <label className="block">
                <span className="text-neutral-700">Precio</span>
                <input type="number" name="price" required />
              </label>
              <label className="block">
                <span className="text-neutral-700">Imagen</span>
                <input type="file" name="image" required />
              </label>
              <label className="block">
                <span className="text-neutral-700">Categoría</span>
                <select name="category" required>
                  <option value="">Selecciona una categoría</option>
                  <option value="tv-media">TV & Media</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="pad">Pad</option>
                  <option value="wearables">Wearables</option>
                  <option value="smart-device">Smart Device</option>
                  <option value="smart-home">Smart Home</option>
                  <option value="vehicle">Vehicle</option>
                </select>
              </label>
              <label className="block">
                <span className="text-neutral-700">Slug</span>
                <input type="text" name="slug" required />
              </label>
              <div className="flex justify-end gap-4">
                <Button type="button" color="secondary" onClick={close}>
                  Cancelar
                </Button>
                <Button type="submit">Añadir</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
