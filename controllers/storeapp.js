const course = require('../DB/course.js')
const app = require('../DB/app.js')
const path = require('path')
//수강신청시 사용
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