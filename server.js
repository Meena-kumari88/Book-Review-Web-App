const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importing routes
const books = require('./routes/books');
const reviews = require('./routes/reviews');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://Meena99:meenamongo9988@cluster0.w3yw8.mongodb.net/bookreview?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define routes
app.use('/books', books);
app.use('/reviews', reviews);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
    