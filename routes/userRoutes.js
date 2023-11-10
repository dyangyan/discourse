// DEFINE USER-RELATED ROUTES

const express = require('express');
const router = express.Router();

// Import your user controller methods
const { getUsers, createUser } = require('../controllers/userController');

// Define routes
router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router;
