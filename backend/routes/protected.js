const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/public', (req, res) => {
  res.json({
    success: true,
    message: 'This is a public route accessible to everyone',
    data: {
      timestamp: new Date().toISOString(),
    },
  });
});

// Protected route - requires authentication
router.get('/profile', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'Profile data retrieved successfully',
    data: {
      user: req.user,
    },
  });
});

// Admin-only route - requires authentication and admin role
router.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Admin data retrieved successfully',
    data: {
      users: [],
      stats: {
        totalUsers: 0,
      },
    },
  });
});

module.exports = router;
