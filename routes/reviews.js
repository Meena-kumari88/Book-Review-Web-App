const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Review = require('../models/Review');

// Post a new review
router.post('/:bookId', async (req, res) => {
  try {
    const bookId = new mongoose.Types.ObjectId(req.params.bookId);
    const review = new Review({
      book_id: bookId,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(400).json({ message: 'Error posting review', error: err.message });
  }
});

// Get all reviews for a specific book
router.get('/:bookId', async (req, res) => {
  try {
    const bookId = new mongoose.Types.ObjectId(req.params.bookId);
    const reviews = await Review.find({ book_id: bookId });
    res.json(reviews);
  } catch (err) {
    res.status(400).json({ message: 'Error retrieving reviews', error: err.message });
  }
});

module.exports = router;
