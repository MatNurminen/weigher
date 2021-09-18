const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeigherSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Weigher = mongoose.model('weigher', WeigherSchema);
