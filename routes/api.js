var User = require('../models/user.js').User;
var Staff = require('../models/staff.js').Staff;
var Tabel = require('../models/staff.js').Tabel;




exports.users = function(req,res,next){
  User.find({}, function(err,users){
    console.log(users);
    if(err) return next(err);
    res.json(users);
  })
};

exports.userid = function(req,res,next){
  var id = req.params.id;
  User.findOne({_id: id}, function(err,user){
    console.log(user);
    if(err) {
      return next(err);
    }else {
      res.json(user);
    }
  })
};

exports.login = function(req,res,next){

  var username = req.body.username;
  var password = req.body.password;
  User.find({username:username}, function(err,user){

    if(user){
      if(User.checkPassword(password)){
        res.send(200,"Athorization successful");
      }else{
        res.send(403,'Password is invalid');
      }
    }else{
      res.send(403,'User is not found')
    }
    req.session.user = user._id;
    res.json(user);
  });

};


exports.register = function(req,res,next){
  var username = req.body.username;
  var password = req.body.password;
  var user = new User({username:username, password:password});
  user.save(function(err,user){
    if(err){return next (err);
    }else{
      req.session.user = user._id;
      res.json(user);
    }
  });

};


exports.addStaff = function(req,res,next){
  var lastName = req.body.lastName;
  var firstName = req.body.firstName;
  var middleName = req.body.middleName;
  var gender = req.body.gender;
  var contactInfo = req.body.contactInfo;
  var date =  Date.now;
  console.log("req"+lastName+firstName+middleName+gender+contactInfo);
  var staff = new Staff({lastName:lastName, firstName:firstName, middleName:middleName, gender:gender, contactInfo:contactInfo });
  console.log("creat"+ staff)
  staff.save(function(err,staff){
    console.log("save"+staff)
    if(err) {
      return next(err);
    }else{
      res.json(staff);
    }
    })
  };

exports.allStaff = function(req,res,next){
  Staff.find({}, function(err,staff){
    if(err) return next(err);
    res.json(staff);
  })
};




