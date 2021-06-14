const mongoose = require('mongoose');

const URL = 
'mongodb+srv://team12:q1w2e3r4@cluster0.houy3.mongodb.net/test';

const connectDB = async () =>{
    await mongoose.connect(URL,{
        useUnifiedTopology :true,
        useNewUrlParser: true
    });
    console.log('db connect');
};

module.exports = connectDB;