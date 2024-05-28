//Server.js is called as Entry Point of the Backend

require('dotenv').config();


const express = require ('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts/' ,workoutRoutes)


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {

//Listen for request...
    app.listen(process.env.PORT , () => {
    console.log('Connected to DB and Listening on port ',process.env.PORT)
    }) 

    })
    .catch((error) => {
        console.log(error);
    })

