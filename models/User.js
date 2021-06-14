const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//사용자 정보를 등록하는 db
const UserSchema = new Schema({  
    userid: {
      type: String,
      required: true,
      unique: true 
    },
    password: {
      type: String,
      required: true
    },
    username: {
        type: String
    },
    Auth: {
      type: Boolean,
      required: true
    }
  });


// note: no lambda func! (not work!)
UserSchema.pre('save', function(next){
    const user = this      
    bcrypt.hash(user.password, 10,  (error, hash) => {        
      user.password = hash 
      next() 
    }); 
});

const User = mongoose.model('User',UserSchema);
module.exports = User