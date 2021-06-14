const course = require('../DB/course.js')
const course = require('../DB/course.js')
const path = require('path')
//수업 등록시 사용
module.exports = (req,res)=>{ 
    let image = req.files.image;  
    image.mv(path.resolve(__dirname,'..','public/img',image.name),async (error)=>{
        await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name,
            userid: req.session.userId
        })
        res.redirect('/')
    })            
}