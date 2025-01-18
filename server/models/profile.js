const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  // Add other profile fields like bio, address, etc.
});

module.exports = mongoose.model('Profile', ProfileSchema);
