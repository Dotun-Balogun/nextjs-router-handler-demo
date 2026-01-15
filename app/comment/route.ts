import { comments } from "./data";

export async function GET(){
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}