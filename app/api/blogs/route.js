import { Connectdb } from "@/app/lib/dbConnect"
import blogModal from "@/app/lib/modal/blogModal";

export async function GET(request) {
    await Connectdb()
    const blogs = await blogModal.find() // ab ye schema ky andar say mongodb ki test ki collection mai sbko find krke le aiga 
    // find saaray leaiga blog modal ki collection mai jitne bh items honge 
    console.log("blog modal ky blogs => ", blogs);

    return Response.json(
        {
            data: blogs, // and idhar bhejdega jitne bh honge 
            msg: "Blogs fetched succesfully"
        }
    )

}

export async function POST(request) {
    await Connectdb()
    const blogs = await request.json() // ab hum post ki request kreingy jb hum post  mai hum frontend say object bhejte hain or o bh object hota hai woh humein request.json mai miljata hay 


    return Response.json(
        {
            data: blogs, // and idhar bhejdega jitne bh honge 
            msg: "Blogs fetched succesfully"
        }
    )
}
