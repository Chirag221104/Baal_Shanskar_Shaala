const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['student', 'guruji'], default: 'student' }
});

module.exports = mongoose.model('User', UserSchema);