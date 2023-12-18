import { OrganizationList } from '@clerk/nextjs'

export const metadata = {
  name: 'Selección de organización | Cystore',
  description: 'Selecciona una organización para acceder a tu cuenta.',
}

export default function Page() {
  return (
    <OrganizationList
      hidePersonal={true}
      afterSelectOrganizationUrl="/admin/products"
    />
  )
}
