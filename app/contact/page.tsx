import { ContactForm } from "./_components/contact-form"

export const revalidate = 86400
export const dynamic = "force-static"
export const dynamicParams = true

export default function ContactPage(props) {

  const params = props.params
  
  return (
    <div className="relative mx-auto max-w-container-md px-4 py-12 md:py-24 xl:px-0">
      <main className="mx-auto max-w-container-sm">
        <p className="px-6" style={{marginBottom: 8}} >Please tell us about your inquiry and we will get back to you.</p>
        <ContactForm />
      </main>
    </div>
  )
}
