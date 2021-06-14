const bcrypt = require('bcrypt')
const User = require('../models/User')
//로그인시 사용

module.exports = (req, res) =>{
    const { userid, password } = req.body;
    console.log(userid)
    console.log(password)
    console.log(req.body)

    User.findOne({userid:userid}, (error,user) => {      
      if (user){           
        bcrypt.compare(password, user.password, (error, same) =>{          
          if(same){ 
            req.session.userId = user._id
            req.session.isProfessor = user.isProfessor
            req.session.userName = user.username
            res.redirect('/')
          }
          else{
            console.log(error)
          }
        })
      }
      else{
        console.log(error)
        
      }
    })
}
  