const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//수업이 등록되면 제작하는 수업별 db 제작 방식은 고민중입니다.
const AppSchema = new Schema({  
  userid: {//학번
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true 
  },
  classid: {//과목코드
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
    required: true,
    unique: true 
  }
  });


const App = mongoose.model('App',AppSchema);
module.exports = App