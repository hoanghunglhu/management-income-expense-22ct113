const express = require('express');
const router = express.Router();

// Basic auth routes
router.post('/register', (req, res) => {
  // TODO: Implement register
  res.status(501).json({ message: 'Not implemented yet' });
});

router.post('/login', (req, res) => {
  // TODO: Implement login
  res.status(501).json({ message: 'Not implemented yet' });
});

module.exports = router; 