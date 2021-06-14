const User = require('../models/User')
const course = require('../models/course')

module.exports = async(req,res) =>{
    if(req.session.isProfessor){
        console.log(";;;;;;;")
        const courses = await course.find({professor:req.session.userName})
        console.log(courses)
        res.render('mypage', {courses})
    }else{

    }
}