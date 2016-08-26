var mongoose = require('../libs/mongoose.js');
var Schema = mongoose.Schema;

var Staff = new Schema({
    lastName:{type:String,required:true},
    firstName:{type:String,required:true},
    middleName:{type:String,required:true},
    gender: {type:String,required:true},
    contactInfo: {type:Number,required:true},
    date: { type: Date, default: Date.now }
});



exports.Staff = mongoose.model('Staff',Staff);