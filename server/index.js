const bodyParser = require('body-parser')
const express=require('express')
const connection=require('./database/db.js')
const dotenv=require('dotenv')
const cors=require('cors')
const Routes=require('./routes/routes.js')

const app=express()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
dotenv.config()
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password)

const PORT=8000;
app.use('/',Routes)
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

