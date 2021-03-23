const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema= new Schema({
    mail: {type:String, required: true},
    password: {type:String, required: true},
    cart:[String],
});

const User= mongoose.model('User',userSchema,'users');
module.exports = User;
