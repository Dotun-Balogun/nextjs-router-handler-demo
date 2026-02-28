export async function generateStaticParams(){
 return []
}


export async function ProductDetails(params:Promise<{id:string}>) {
    const {id} = await params
    return(
        <div>
           <h1>product{id} details </h1>
        </div>
    )
}