// models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    club: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guests: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    participantsCount: {
      type: Number,
      default: 0,
    },
    volunteersCount: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
