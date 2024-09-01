"use server";
import { cookies } from "next/headers"

//NEW
export async function POST(request: Request) {
    const body = await request.json()

    const prefix = process.env.NODE_ENV === "development" ? "__Dev-" : ""
    const payload = {
        token: cookies().get(`${prefix}xxx.refresh-token` as any)?.value,
    }

    const res = await fetch(
        `${process.env.API_BASE_URL}/user-service/user/token`, 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }
    )

    const data = await res.json()

    return Response.json({
        success: res.ok,
        status: res.status,
        data,
    })
}
