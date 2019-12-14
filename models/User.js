const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ================== Create Schema ==================
const UserSchema = new Schema({
  tokenhash: {
    type: String
  },
  // user logins
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  company: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  // User goal tracking==========================
  plan: {
    // 0=custom, 1=KTLO, 2=PFG, 3=WOW
    type: Number,
    default: 0
  },
  startdate: {
    type: Date,
  },
  // New Reach Outs Goal
  nrog: {
    type: Number,
    default: 0
  },
  nrogdone: {
    type: Number,
    default: 0
  },
  // Follow Up Goal
  fug: {
    type: Number,
    default: 0
  },
  fugdone: {
    type: Number,
    default: 0
  },
  // Team Reach Out Goal
  trog: {
    type: Number,
    default: 0
  },
  trogdone: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
