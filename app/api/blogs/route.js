import { Connectdb } from "@/app/lib/dbConnect"

export async function GET(request) {
    await Connectdb()
    return Response.json(
        {
            data : [],
            msg : "Blogs fetched succesfully"
        }
    )
    
    }