// SET UP SERVER
//
// Import necessary modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Set the port

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, MERN Stack!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// CONNECT TO MONGODB
//
// Connect to Express.js server using mongoose 
const mongoose = require('mongoose');

// Replace 'your_mongodb_uri' with your actual MongoDB connection string
const mongoURI = 'mongodb+srv://danyangyan:5JhJMQ2itEnVW2Wm@discourse.mwgzz8m.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// USE ROUTES
//
// Use user routes
const userRoutes = require('./routes/userRoutes');

// Use the routes
app.use('/api', userRoutes);

// Note: You can define more routes and use them similarly
