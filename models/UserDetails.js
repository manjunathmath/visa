const mongoose = require("mongoose");


const userDetailsSchema = new mongoose.Schema({
    firstName: String,
    lastName :String,
    email:String,
    mobileNumber:String,
    dateOfBirth:String,
    houseNumber:String,
    streetName:String,
    city:String,
    state:String,
    pincode:String,
});

export default mongoose.model.UserDetails || mongoose.model("UserDetails",userDetailsSchema);