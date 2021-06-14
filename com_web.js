const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const webSchema = new Schema({  
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


const webclass = mongoose.model('webclass',webSchema);
module.exports = webclass