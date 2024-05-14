import axios from "axios";
const URL='http://localhost:8000'

export const addUser=async(data)=>{
    try {
       return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log('Error while calling add user api',error)
        
    }
}

export const getUser=async()=>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while calling get api',error)
        
    }
}

export const getSingleUser=async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling single user api',error)
        
    }
}

export const EditUserdetails=async(user,id)=>{
    
    try {
        return await axios.post(`${URL}/${id}`,user)
        
    } catch (error) {
        console.log('Error while calling edit user api',error)
        
    }
}

export const DeleteUser=async(id)=>{
    try {
        await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while calling delete user api',error)
        
    }

}