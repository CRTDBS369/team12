const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const structSchema = new Schema({  
  week: { 
    type: String,
    required: true
  },
  video_url: {
    type: String
  },
  description: {
    type: String
  },
  deadline: {
    type: String
},
classname: {
    type: String
}

  });


const structclass = mongoose.model('struct',structSchema);
module.exports = structclass