


const User=require('../schema/user-schema.js')

 const addUser=async(request,response)=>{
    const user=request.body;
    const newUser=new User(user)
    try {
        await newUser.save()
        response.status(200).json(newUser)
    } catch (error) {
        response.status(404).json({message:error.message})
        
    }
}
const getUser=async(request,response)=>{
     try {
         const users= await User.find({})
         response.status(200).json(users)
     } catch (error) {
         response.status(404).json({
             message:error.message
         })
        
     }
}

const getSingle=async(request,response)=>{
    try {
        const user=await User.findById(request.params.id)
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({message:error.message})
        
    }
}

const edit=async(request,response)=>{
    let user=request.body;
        const edituser=new User(user);
    try {
        await User.updateOne({_id:request.params.id},edituser) 
        response.status(201).json(edituser);

    } catch (error) {
        response.status(404).json({message:error.message})
        
    }
}

const deleteUser=async(request,response)=>{
    try {
        await User.deleteOne({_id:request.params.id})
        response.status(200).json({message:'User deleted Successfully'})
        
    } catch (error) {
        response.status(404).json({message:error.message})
        
    }
}
module.exports = {
    addUser: addUser,
    getUser: getUser,
    getSingle:getSingle,
    edit:edit,
    deleteUser:deleteUser
};
