const User = require('../models/User')
const course = require('../models/course')

module.exports = async(req,res) =>{
    const courses = await course.find({})
    res.render('courses', {courses})
}