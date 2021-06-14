const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
 //수업 정보를 등록하는 db
const courseSchema = new Schema({  
    classid: {
      type: String,
      required: true,
      unique: true 
    },
    professor: {
      type: String,
      required: true,
    },
    classname: {
        type: String,
        required: true,
        unique: true 
    }
  });


const course = mongoose.model('course',courseSchema);
module.exports = course;