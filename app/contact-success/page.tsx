"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ContactPage(props) {
  const params = props.params
  const searchParams = useSearchParams()

  const ticketId = searchParams.get("searchParams")

  return (
    <center style={{marginTop: 30, marginBottom: 48}} className="relative mx-auto max-w-container-md px-4 py-12 md:py-24 xl:px-0">
        <p style={{marginBottom: 50}}>
          {ticketId ?
            `Ticket id {ticketId} was successfully created!`
             : "Ticket was successfully created!"
          }
        </p>
      <Link href="/" className="mt-8 rounded-md bg-neutral-200 px-6 py-2 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200" >
        Go to Home page
      </Link>
    </center>
  )
}
