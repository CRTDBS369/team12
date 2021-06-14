const express = require('express')
const ejs = require('ejs')
const app = new express()
const connectDB = require('./models/Connection');
const fileUpload = require('express-fileupload')


const loginUserController = require('./controllers/loginUser')

const homeController = require('./controllers/home')
const login_registerController = require('./controllers/login_register')
const contactController = require('./controllers/contact')

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())


connectDB();

app.get('/', homeController)
app.get('/login_register', login_registerController)
app.get('/contact', contactController)

app.listen(50005, ()=>{
    console.log('start')
})
