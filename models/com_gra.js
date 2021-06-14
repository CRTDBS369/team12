const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const graSchema = new Schema({  
  week: { //주차
    type: String,
    required: true
  },
  video_url: { //영상주소
    type: String
  },
  description: { //강의 설명
    type: String
  },
  deadline: {//출석 기간
    type: String
},
classname: {//수업 이름
    type: String
}
  });


const graclass = mongoose.model('graclass',graSchema);
module.exports = graclass