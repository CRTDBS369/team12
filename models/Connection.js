const mongoose = require('mongoose');

const URL = 
'mongodb+srv://lemon:a12345@cluster0.mmlok.mongodb.net/test';

const connectDB = async () =>{
    await mongoose.connect(URL,{
        useUnifiedTopology :true,
        useNewUrlParser: true
    });
    console.log('db connect');
};

module.exports = connectDB;