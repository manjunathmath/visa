import UserDetails from "@/models/UserDetails";
import connectdb from "@/utils/connectdb";
import nc from 'next-connect';

connectdb();

const handler = nc().post(async (req, res) => {

    const { firstName, lastName, email, mobileNumber, dateOfBirth, houseNumber, streetName, city, state, pincode } = req.body;
    try {
        const newUserDetails = new UserDetails({ firstName, lastName, email, mobileNumber, dateOfBirth, houseNumber, streetName, city, state, pincode });
        await newUserDetails.save();
        return res.status(200).send("User details added successfully");
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Something went wrong...." })
    }

}).get(async (req, res) => {
    try{
        let userDetailsData={};
        if(req.query.isEdit == true){
             userDetailsData = await UserDetails.findOne({_id:req.query.id});
        }else{
             userDetailsData = await UserDetails.find();
        }
        return res.status(200).send(userDetailsData);
    }catch(error){
        console.log(error)
        return res.status(400).json({ message: "Something went wrong...." })
    }

});

export default handler