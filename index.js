const express = require('express')
const ejs = require('ejs')
const app = new express()
const connectDB = require('./models/Connection');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const path = require('path')

const User = require('./models/User')
const course = require('./models/course')


const loginUserController = require('./controllers/loginUser')
const homeController = require('./controllers/home')
const contactController = require('./controllers/contact')
const coursesController = require('./controllers/courses')
const storeUserController = require('./controllers/storeUser')
const mypageController = require('./controllers/mypage')

const checkboxMiddleware =  require('./middleware/registerCheckboxMiddleware')
const check_unlogged_in_user_in_mypageMiddleware = require('./middleware/check_unlogged_in_user_in_mypage')

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
app.get('/mypage',check_unlogged_in_user_in_mypageMiddleware,mypageController)
app.get('/streaming/:id', async (req, res)=>{
    const lecture = await course.findById(req.params.id)
    lectureURL = lecture.lectureURL
    res.render('lecture_streaming',{lectureURL})
})

app.post('/users/login', loginUserController)
app.post('/users/register',checkboxMiddleware, storeUserController)
app.post('/lecture/register', (req,res) =>{
    User.findById(req.session.userId, (error, user) =>{
        console.log("------------")
        console.log(user)
        professor = user.username
        let image =req.files.image;
        image.mv(path.resolve(__dirname, 'public/img', image.name), async(error) => {
        await course.create({
            ...req.body,
            professor : professor,
            classImage : '/img/'+image.name})
    }
    )
    })
    
    res.redirect('/mypage')
})

app.listen(50005, ()=>{
    console.log('start')
})
