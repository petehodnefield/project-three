const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    date: {
      type: String
    },
    culture: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
        virtuals: true
    }
  }

);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
