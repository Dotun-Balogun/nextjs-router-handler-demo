import { cookies } from "next/headers";
export async function GET(){
    return new Response('hello world')
}



// nextjs 14 server cookie util functions
export async function SetServerCookies(
    name:string,
    value:string,
    options: {
        path?: string;
        httpOnly?: boolean;
        secure?: boolean;
        maxAge?: number;
        expires?: Date;
        sameSite?: 'lax' | 'strict' | 'none';
        domain?: string;
    } = {}
){
    const cookiesStore = await cookies();
  cookiesStore.set({
    name,
    value,
    ...options
  }
  )
}


export async function getServerCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function deleteServerCookie(name: string, path: string = '/') {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}