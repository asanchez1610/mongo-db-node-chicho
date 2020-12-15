const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  dateOfBirth: String,
  phone: String,
  email:String,
  address: String,
  urlPhoto: String,
  gender: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
