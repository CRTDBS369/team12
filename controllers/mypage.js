const User = require('../models/User')
const course = require('../models/course')

module.exports = async(req,res) =>{
    if(req.session.isProfessor){
        const courses = await course.find({professor:req.session.userName})
        res.render('mypage', {courses})
    }else{

    }
}