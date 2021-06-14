const course = require('../models/course')


module.exports = async(req,res) =>{
    //console.log(req.params.id)
    //const lecture = await course.findById(req.params.id)
    //lectureURL = lecture.lectureURL
    res.render('lecture_streaming')
}