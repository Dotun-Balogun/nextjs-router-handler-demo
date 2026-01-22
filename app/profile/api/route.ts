import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const reqeustHeader = new Headers(request.headers)
    console.log(reqeustHeader.get("Authorisation"))

    // using header in next/headers
    // const headerList =await headers()
    // console.log(headerList.get("Authorization"))

    return new Response('profile Api data')
}