//var async = require('async');
//var mongoose = require('./libs/mongoose.js');


/*var user1 = new User({
    username:'Lera',
    password:'12345'
});


user1.save(function(err,user1,effected){
    if(err) throw err;
})


User.findOne({username:'Lera'}, function(err,Lera){
    console.log(Lera);
});*/


//

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function(err){
    console.log(arguments);
    mongoose.disconnect();
});

function open(callback){
    mongoose.connection.on('open',callback);

}

function dropDatabase(callback){
    var db = mongoose.connection.db;
    db.dropDatabase(callback);


}

 function requireModels(callback){
    require('models/user');

    async.each(Object.keys(mongoose.models), function(modelName,callback){
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
 }

function createUsers(callback){
    var users = [
        {username:'Lera', password:'123'},
        {username:'Alex', password:'secret'},
        {username:'Olga', password:'qwert'}
    ];

    async.each(users, function(userData,callback){
        var user = new mongoose.models.User(userData);

        user.save(callback);
        console.log(arguments);
    },callback);
}