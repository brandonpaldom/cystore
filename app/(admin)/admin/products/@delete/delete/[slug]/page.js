import DeleteProductForm from '@/components/admin/delete-product-form'
import { getProductBySlug } from '@/utils/products'

export default async function Page({ params }) {
  const product = await getProductBySlug(params.slug)

  return <DeleteProductForm product={product} />
}
