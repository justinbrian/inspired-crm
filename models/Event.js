const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ================== Event Schema ==================
const EventSchema = new Schema({
  user: {
      type: Schema.Types.ObjectId, 
      ref: 'users'
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model("events", EventSchema);
