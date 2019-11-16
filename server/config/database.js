//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/passport-login';
mongoose.connect(process.env.MONGODB_URI || mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;


module.exports = mongoose;