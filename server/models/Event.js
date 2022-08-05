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
      type: Date
    },
    culture: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Culture'
      }
    ]
  },
  {
    toJSON: {
        virtuals: true
    }
  }

);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
