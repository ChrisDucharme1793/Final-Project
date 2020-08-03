const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, required: false },
  betHistory: { type: String, required: false }

});



// const User = mongoose.model('users', UserSchema);

const User = mongoose.model('users', UserSchema);

module.exports = User;
