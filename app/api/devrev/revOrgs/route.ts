import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const url = "https://api.devrev.ai/rev-orgs.list"
    const headers = {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEVREV_ADMIN_TOKEN}`
    }

    const res = await fetch(url, {
        method: "GET",
        headers: headers
    })

    return NextResponse.json(res)
}
