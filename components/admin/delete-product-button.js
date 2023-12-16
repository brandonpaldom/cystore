'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import { deleteProduct } from '@/actions/delete-product'

export default function DeleteProductButton({ slug }) {
  const router = useRouter()

  async function deleteAction() {
    await deleteProduct(slug)
    router.refresh()
  }

  return (
    <form action={deleteAction}>
      <Button type="submit" size="sm" color="ghost">
        Eliminar
      </Button>
    </form>
  )
}
