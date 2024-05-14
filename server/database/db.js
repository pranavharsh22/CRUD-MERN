const mongoose=require('mongoose')

 const connection=async(username,password)=>{
    const URL= `mongodb+srv://${username}:${password}@cluster0.luombhc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL,{})
        console.log('Connected to database successfully')
    } catch (error) {
        console.log('Error while connecting to the database',error)
        
    }
};

module.exports=connection