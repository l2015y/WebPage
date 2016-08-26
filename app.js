var express = require('express');
var path = require('path');
var http = require('http');
var config = require('./config');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes');
var api = require('./routes/api');
var log = require('./libs/log')(module);
var cookieSession = require('cookie-session');


var app = express();




app.set('views', path.join(__dirname, '/templates'));



app.use(bodyParser.json());
app.use(cookieParser());





app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'session',
  secret:config.get("session:secret"),
  key:config.get("session:key"),
  cookie:config.get("session:cookie")
}));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);


app.get('/api/allStaff', api.allStaff);
app.post('/api/addStaff',api.addStaff);
app.post('/api/login',api.login);
app.post('/api/register', api.register);
//app.delete('/api/staff/:id',api.delete);



app.use(function(req, res, next){
  res.status(404);
  log.debug('Not found URL: %s',req.url);
  res.send({ error: 'Not found' });
  return;
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  log.error('Internal error(%d): %s',res.statusCode,err.message);
  res.send({ error: err.message });
  return;
});

app.get('/ErrorExample', function(req, res, next){
  next(new Error('Random error!'));
});


http.createServer(app).listen(config.get('port'), function(){
  console.log('Expres port listening on port '+ config.get('port'));
});







