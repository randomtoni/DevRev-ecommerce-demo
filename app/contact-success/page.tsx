import { Suspense } from 'react'
import ContactSuccessText from './_components/contact-success-text'

export default function ContactSuccess(props) {
  const params = props.params

  return (
    <div>
      <Suspense>
        <ContactSuccessText />
      </Suspense>
    </div>
  )
}
