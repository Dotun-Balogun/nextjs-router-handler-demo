import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const reqeustHeader = new Headers(request.headers)
    console.log(reqeustHeader.get("Authorisation"))

    // using header in next/headers
    // const headerList =await headers()
    // console.log(headerList.get("Authorization"))

// to read cookie in our route handler use request parameter
const theme = request.cookies.get('theme')
const session = await cookies()
session.set('sessionId','abc123') // setting cookie using next/headers
console.log((await cookies()).get('sessionId'))

    console.log('theme cookie:',theme)
    return new Response('profile Api data', {
        headers: {
            'content-type': 'text/html',
            // setting cookie in route handler
            'set-cookie':"theme=dark",
        }
    })
}