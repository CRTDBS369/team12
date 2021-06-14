const express = require('express')
const ejs = require('ejs')
const app = new express()
const connectDB = require('./DB/Connection');
const fileUpload = require('express-fileupload')


const loginUserController = require('./Api/loginUser')

const homeController = require('./controllers/home')
const login_registerController = require('./controllers/login_register')

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())


connectDB();

app.get('/', homeController)
app.get('/login_register', login_registerController)


app.listen(50005, ()=>{
    console.log('start')
})
