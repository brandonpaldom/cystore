'use client'

import { useRouter } from 'next/navigation'
import Button from '../ui/button'
import { deleteProduct } from '@/actions/delete-product'
import { useRef } from 'react'

export default function DeleteProductForm({ product }) {
  const router = useRouter()
  const formRef = useRef(null)

  const close = () => {
    router.back()
  }

  async function deleteAction() {
    await deleteProduct(product.slug)
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
            <h2>Eliminar producto</h2>
            <p>
              ¿Estás seguro de que quieres eliminar el producto{' '}
              <strong>{product.name}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <Button type="button" color="secondary" onClick={close}>
                Cancelar
              </Button>
              <form action={deleteAction}>
                <Button type="submit" color="danger">
                  Eliminar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
