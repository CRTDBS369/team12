const bcrypt = require('bcrypt')
const User = require('../DB/User')
//로그인시 사용
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
  