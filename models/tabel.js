var mongoose = require('../libs/mongoose.js');
var Schema = mongoose.Schema;

var Tabel = new Schema({
    name:{type:String,required:true},
    date:{type: Date,required:true},
    startTime:{type:Number,required:true},
    FinishTime:{type:Number,required:true}
});



exports.Tabel = mongoose.model('Tabel',Tabel);