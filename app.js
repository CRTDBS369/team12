const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//수강 현황을 등록하는 db
const AppSchema = new Schema({  
  userid: {//학번
    type: String,
    required: true,
    unique: true 
  },
  classid: {//과목코드
    type: String,
    required: true,
    unique: true 
  },
  members: {//수강 정원
    type: Number,
    default: 0,
    max: 50
  },
  Maxmembers: {//최대 정원
    type: String
  }
  });


const App = mongoose.model('App',AppSchema);
module.exports = App