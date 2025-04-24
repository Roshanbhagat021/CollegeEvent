const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerAs: {
    type: String,
    enum: ["user", "admin"], 
    default: "user",         
  },
}, { versionKey: false });

const UserModal = mongoose.model('user', userSchema);

module.exports = { UserModal };
