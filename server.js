const express = require('express');
const logger = require('morgan');
const restaurants = require('./server/routes/api/restaurants') ;
const restaurantroute = require('./server/routes/restaurantroute') ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes= require ("./server/routes")
var jwt = require('jsonwebtoken');
var app = express();

const PORT = process.env.PORT || 3001;

app.set('secretKey', 'nodeRestApi'); // jwt secret token

// connection to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/customizeRestaurant", { useNewUrlParser: true });
app.use(express.static("public"));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

app.get('/', function(req, res){
res.json({"tutorial" : "Build REST API with node.js"});
});

// public route
app.use(routes)

// private route
app.use('/api', validateUser, restaurants);

restaurantroute(app);

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

function validateUser(req, res, next) {
  jwt.verify(req.body.token, req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Something looks wrong :( !!!"});
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});