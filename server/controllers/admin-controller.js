const User = require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllUsers = async(req , res, next ) => {
    try {
        const users = await User.find({},{password:0});// find method returns all values from database except password
        console.log(users);
        if(!users || users.length ===0){
            return res.status(404).json({message: "No User Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res,next) =>{
    try {
        const id = req.params.id; // fetch data from URL
        const data = await User.findOne({_id: id},{password: 0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body; // get data in updatedUserData variable

        //updateOne method will look for _id that matches the id that we passed and replace its data
        const updatedData = await User.updateOne(
            {_id: id} ,
            {
            $set :updatedUserData,
            }
        );
        return res.status(200).json(updatedData)
    } catch (error) {
        next(error);
    }
}

const deleteUserById=async(req,res)=>{
    try{
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});


    }catch(error){
        next(error);
    }

}



const getAllContacts = async(req , res, next) => {
    try {
        const contacts = await Contact.find();// find method returns all values from database
        console.log(contacts);
        if(!contacts || contacts.length ===0){
            return res.status(404).json({message: "No Message Found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}
const deleteContactById=async(req,res)=>{
    try{
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"});


    }catch(error){
        next(error);
    }

}
module.exports = {getAllUsers , getAllContacts,deleteUserById,getUserById,updateUserById, deleteContactById};