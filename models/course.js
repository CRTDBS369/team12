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
    className: {
      type: String,
      required: true, 
    },
    classImage: {
      type: String,
      required: true, 
    },
    classDescription: {
      type: String,
      required: true, 
    },
    classCategory: {
      type: String,
      required: true, 
    },
    professor: {
      type: String,
      required: true,
    },
    studentCount: {
        type: Number,
        default:0
    },
    lectureURL:{
      type: String,
      required:true
    }
  });


const course = mongoose.model('course',courseSchema);
module.exports = course;