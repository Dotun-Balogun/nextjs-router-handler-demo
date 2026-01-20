import { comments } from "../data";


export async function GET(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
    const {id} = await params
    const comment = comments.find((comment)=>comment.id === parseInt(id))
    return  Response.json(comment)
}



export async function PATCH(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
  
  const {id} = await params;
  const body = await request.json();
  const {text} = body
//  check if comment exists
   const  index = comments.findIndex((comment)=>comment.id === parseInt(id))
   
   if(!comments){
    return new Response(JSON.stringify({error:"not found"}) ,{status:404} )
   }

   comments[index].text = text
    return Response.json(comments[index])

}


export async function DELETE(
    request:Request,
    {params}:{params:Promise<{id:string}>}
){
  
  const {id} = await params;
 
//  check if comment exists
   const  index = comments.findIndex((comment)=>comment.id === parseInt(id))
   
   if(index === -1){
    return new Response(JSON.stringify({error:"not found"}) ,{status:404} )
   }

   comments.splice(index,1)
    return new Response(null,{status:204})

}   