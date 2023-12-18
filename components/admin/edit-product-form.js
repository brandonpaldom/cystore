'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { updateProduct } from '@/actions/update-product'

export default function EditProductForm({ product }) {
  const router = useRouter()
  const formRef = useRef(null)

  const close = () => {
    router.back()
  }

  async function updateAction(formData) {
    await updateProduct(formData, product.slug)
    formRef.current?.reset()
    router.push('/admin/products')
    router.refresh()
  }

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6">
          <div className="card flex w-full max-w-[480px] flex-col gap-4">
            <h2>Añadir un producto</h2>
            <form action={updateAction} className="flex flex-col gap-6">
              <label className="block">
                <span className="text-neutral-700">Nombre</span>
                <input
                  type="text"
                  name="name"
                  required
                  defaultValue={product.name}
                />
              </label>
              <label className="block">
                <span className="text-neutral-700">Descripción</span>
                <textarea
                  rows={3}
                  name="description"
                  required
                  defaultValue={product.description}
                />
              </label>
              <label className="block">
                <span className="text-neutral-700">Precio</span>
                <input
                  type="number"
                  name="price"
                  required
                  defaultValue={product.price}
                />
              </label>
              <label className="block">
                <span className="text-neutral-700">Imagen</span>
                <input type="file" name="image" />
              </label>
              <div className="flex flex-col gap-2">
                <span className="text-neutral-700">Imagen actual</span>
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.name}
                  className="rounded-lg border border-neutral-100"
                />
              </div>
              <label className="block">
                <span className="text-neutral-700">Categoría</span>
                <select
                  name="category"
                  required
                  defaultValue={product.category}
                >
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
                <input
                  type="text"
                  name="slug"
                  required
                  defaultValue={product.slug}
                />
              </label>
              <div className="flex justify-end gap-2">
                <Button color="secondary" onClick={close}>
                  Cerrar
                </Button>
                <Button type="submit">Actualizar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
