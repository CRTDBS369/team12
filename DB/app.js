const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//수강 현황을 등록하는 db
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