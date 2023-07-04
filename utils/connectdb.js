const mongoose = require("mongoose");

async function connectdb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/test",{useUnifiedTopology:true,useNewUrlParser:true} )
        console.log("Successfully connected to Mongo DB")
    } catch (error) {
        console.log(error)
    }
}


export default connectdb