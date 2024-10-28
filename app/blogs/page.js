

export default async function blogs (){
let res =   await  fetch ("http://localhost:3000/api/blogs")
res =  await res.json()
return(

    <>
    <div className="container mx-auto my-5 text-2xl">

{res.data?.map((blogs)=>(
    <div className="border text-4xl  text-center p-2 my-1" key={blogs._id}>
    <h1>{blogs.title}</h1>
    <h1>{blogs.body}</h1>
    </div>
))}

    </div>
    
    
    </>
)

} 
