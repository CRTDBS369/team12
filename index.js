const express = require('express')
const app = new express()
const connectDB = require('./DB/Connection');

const loginUserController = require('./Api/loginUser')

connectDB();

app.listen(4000, ()=>{
    console.log('start')
})