 const mongoose =require("mongoose");
module.exports ={
   dbConnect:async ()=>{
        try{
            await mongoose.connect("mongodb://127.0.0.1:27017/user").then(()=>{
            console.log("MongoDB Connected Succesfully");
        });
    } catch (err) {
        console.log(err);
    }
 },
}
