'use client'

import { Button } from "components/ui/button"
import { CSSProperties, useState } from "react"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"
import { useRouter } from 'next/navigation'

const ERROR: CSSProperties = {color: "red", marginLeft: 8, fontSize: 15, marginTop: 2}

export const ContactForm = (props) => {

  const initialErrors = {name: false, email: false, message: false}
  const [errors, setErrors] = useState(initialErrors)
  const [submitError, setSubmitError] = useState(false)
  const router = useRouter();

  const createTicket = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if (submitError) setSubmitError(false)
    const Formdata = new FormData(e.currentTarget)
    const name = Formdata.get('name');
    const email = Formdata.get('email');
    const message = Formdata.get('message');

    if (!name || !email || !message) {
      setErrors({ name: !name, email: !email, message: !message })
      return
    } else {
      setErrors(initialErrors)
    }

    const res = await fetch("/api/devrev/submitTicket", {
      method: "POST",
      body: JSON.stringify({name, email, message}),
      headers: { "Contant-Type": "application/json" }
    })
    const resData: any = await res.json()
    if (resData.type==="bad_request") {
      setSubmitError(true)
    } else {
      let search = new URLSearchParams()
      search.set("ticketId", resData.ticketId)
      router.push(`/contact-success?${search}`)
    }

  }

  return (
    <form onSubmit={createTicket} >
      <Input name="name" style={{marginTop: 12}} placeholder="Enter your name" />
      {errors.name && <p style={ERROR}>Enter name</p>}
      <Input name="email" type="email" style={{marginTop: 12}} placeholder="Enter your email" />
      {errors.email && <p style={ERROR}>Enter email</p>}
      <Textarea name="message" className="h-44" style={{marginTop: 12}} placeholder="Enter your message" />
      {errors.message && <p style={ERROR}>Enter message</p>}
      <center>
        <Button type="submit" className="mt-8 rounded-md bg-neutral-200 px-6 py-2 text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-200" >
          Open Ticket
        </Button>
        {submitError && (
          <p style={{...ERROR, marginTop: 12}} >
            Conexion error, please try again.
          </p>
        )}
      </center>
    </form>
  )
}