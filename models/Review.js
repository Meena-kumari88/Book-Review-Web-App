const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now } // Add a date field with default value
});

module.exports = mongoose.model('Review', reviewSchema);
  