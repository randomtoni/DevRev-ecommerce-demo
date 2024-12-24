"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ContactSuccessText(props) {
  
  const params = props.params
  const searchParams = useSearchParams()

  const ticketId = searchParams.get("ticketId")

  return (
    <center style={{marginTop: 30, marginBottom: 48}} className="relative mx-auto max-w-container-md px-4 py-12 md:py-24 xl:px-0">
        <div style={{marginBottom: 50}}>
          {ticketId ?
            <>Ticket successfully created!<p style={{marginTop: 2}}>Ticket id: <span  style={{fontWeight: "bold"}} >{ticketId}</span></p></>
             : <p>Ticket was successfully created!</p>
          }
        </div>
      <Link href="/" className="mt-8 rounded-md bg-neutral-200 px-6 py-2 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200" >
        Go to Home page
      </Link>
    </center>
  )
}
