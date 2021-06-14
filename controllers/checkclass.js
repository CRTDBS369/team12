const bcrypt = require('bcrypt')
const User = require('../models/User')
//학번과 교수/학생에 따른 db 접근
//교수라면 등록해야 하는 수업 접근
//학생이라면 등록한 수업 접근
module.exports = (req, res) =>{
    const { userid, password } = req.body;

    User.findOne({userid:userid}, (error,user) => {      
      if (user){           
        bcrypt.compare(password, user.password, (error, same) =>{          
          if(same){ 
            req.session.userId=user._id            
            res.redirect('/')
          }
          else{
            res.redirect('/auth/login')  
          }
        })
      }
      else{
        res.redirect('/auth/login')
        
      }
    })
}
  