var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  user_name: String, 
  user_phone: String,
  user_password: String,
  user_email: String,
  created_on: { type: Date, default: Date.now },
}, {collection: 'user'});
module.exports = mongoose.model('User', UserSchema);