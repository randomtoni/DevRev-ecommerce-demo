import { NextResponse } from "next/server";

interface CreateTicketFrom {
    name: string
    email: string
    message: string
}

export async function POST(req: Request) {
    const data = await req.json() as CreateTicketFrom
    const now = Date.now()

    // Get available user
    const baseUrl = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'
    const usersResponse = await fetch(`${baseUrl}/api/devrev/devUsers`, {
        method: "GET",
        headers: { "Contant-Type": "application/json" }
    })
    const users = await usersResponse.json() as {dev_users: [{display_id: string}]}
    let userId = users.dev_users?.length>0 ? users.dev_users[0].display_id : "DEVU-1"

    // create new ticket with data
    const url = "https://api.devrev.ai/works.create"
    const headers = {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEVREV_ADMIN_TOKEN}`
    }
    const body = {
        "type": "ticket",
        "owned_by": [ userId ],
        "title": data.name+"_"+now,
        // "applies_to_part": "",
        // optionals
        "rev_org": process.env.NEXT_PUBLIC_DEVREV_REV_ORG,
    }
    console.log(body)

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers
    })

    const resData = await res.json()
    console.log("submit ticket res", resData)

    return NextResponse.json(resData)
}   

export async function GET(req: Request) {
    console.log("GETting")
    return NextResponse.json({"hola": "hola"})
}   