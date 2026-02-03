import { redirect } from "next/dist/server/api-utils";

export async function GET(){
    return new Response('Dashboard route')
}



