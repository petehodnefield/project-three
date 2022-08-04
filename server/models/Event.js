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
  }
  //add category once model is created
//   category: {
//     type: Schema.Types.ObjectId,
//     ref: 'Category',
//     required: true
//   }
  //image - future development option
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
