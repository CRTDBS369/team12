const User = require('../DB/User.js')
const path = require('path')
//회원가입시 사용
module.exports = (req,res)=>{ 
    User.create(req.body,(error, user)=>{
        if(error){
            return res.redirect('/auth/register')        
        }        
        res.redirect('/')  
    })        
}