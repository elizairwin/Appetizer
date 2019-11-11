const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const RestarurantSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 aboutUs: {
  type: String,
  trim: true,
  required: true
 },
 menu: {
    type: String,
    trim: true,
    required: true
   }
});
module.exports = mongoose.model('Restaurant', RestarurantSchema)