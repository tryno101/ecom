const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please key in your first name!"],
  },
  lastName: {
    type: String,
    required: [true, "Please key in your last name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
