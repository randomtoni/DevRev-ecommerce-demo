import DevUsers from "lib/devrev/devUsers";
import { NextResponse } from "next/server";

interface CreateTicketFrom {
    name: string
    email: string
    message: string
}

export async function POST(req: Request) {
    const data = await req.json() as CreateTicketFrom
    const now = Date.now()

    //* Custom logics for owner selection
    const users = await DevUsers.getList() as {dev_users: [{display_id: string}]}
    //* For now we just use the first user that is mine
    let userId = users.dev_users?.length>0 ? users.dev_users[0].display_id : "DEVU-1"
    // ...

    // New ticket data
    const url = "https://api.devrev.ai/works.create"
    const headers = {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEVREV_ADMIN_TOKEN}`,
        "Content-Type": "application/json"
    }
    const body = {
        "type": "ticket",
        "title": data.name+"_"+now,                                 // title definition can beadjusted
        "owned_by": [ userId ],
        "applies_to_part": process.env.NEXT_PUBLIC_DEVREV_PART,     // The part is defind as "Ecomerce web"
        // optionals
        "rev_org": process.env.NEXT_PUBLIC_DEVREV_REV_ORG,          // DevRev org
    }

    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers
    })

    const resData = await res.json() as {work: {display_id: string, [key: string]: unknown}} 

    return NextResponse.json({ticketId: resData.work.display_id})
}