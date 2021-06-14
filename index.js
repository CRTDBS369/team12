const express = require('express')
const ejs = require('ejs')
const app = new express()
const connectDB = require('./models/Connection');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');

const loginUserController = require('./controllers/loginUser')
const homeController = require('./controllers/home')
const contactController = require('./controllers/contact')
const coursesController = require('./controllers/courses')

const storeUserController = require('./controllers/storeUser')

const checkboxMiddleware =  require('./middleware/registerCheckboxMiddleware')

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use("*", (req,res,next) => {
    loggedIn = req.session.userId;
    next()
});


connectDB();

app.get('/', homeController)
app.get('/contact', contactController)
app.get('/courses',coursesController)

app.post('/users/login', loginUserController)
app.post('/users/register',checkboxMiddleware, storeUserController)

app.listen(50005, ()=>{
    console.log('start')
})
