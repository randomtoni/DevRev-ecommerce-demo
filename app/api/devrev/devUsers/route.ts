import DevUsers from "lib/devrev/devUsers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const res = await DevUsers.getList()
    return NextResponse.json(res)
}