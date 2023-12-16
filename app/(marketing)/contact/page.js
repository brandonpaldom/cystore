import ContactForm from '@/components/contact/contact-form'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto mt-16 max-w-screen-md text-center">
        <h1>Contáctanos</h1>
        <p className="mt-4 text-xl">
          ¿Tienes alguna duda? Escríbenos y te responderemos lo antes posible.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
