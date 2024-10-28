import mongoose from "mongoose";

export  async function Connectdb() {
    let isConnected = false;
    if(isConnected) return "db Connected"
    try {

        let connected = await mongoose.connect(process.env.MONGODB_URI)
if(connected.connection.readyState == 1){
    isConnected = true
    console.log("db is connected succesfully");
    
}
    } catch (error) {
        console.log("error",error.message);
        
    }


}