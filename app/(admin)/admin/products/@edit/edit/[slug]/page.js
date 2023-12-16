import EditProductForm from '@/components/admin/edit-product-form'
import { getProductBySlug } from '@/utils/products'

export default async function Page({ params }) {
  const product = await getProductBySlug(params.slug)

  return <EditProductForm product={product} />
}
