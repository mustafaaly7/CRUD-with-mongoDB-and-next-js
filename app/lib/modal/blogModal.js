const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    body: String,
    // createdAt: { type: Date, default: Date.now }, // instead of this we can do that 
    author: String,
}, {
    // instead of creating  updated at and created at to check time  we can do this instead 
    timestamps: true // timestamp will maintain both  

})
// we create schema to define the structure of our db collection  
// then we create model which is known as the collection where we give the collection name and our schema 


const blogModal = mongoose.model.Blogs || mongoose.model("Blogs", blogSchema) // now this condition says that if mongoose.modal.blogs exist store it in blog modal else create one and store it 


export default blogModal
