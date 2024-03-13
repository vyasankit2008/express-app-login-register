// routes/profileRoutes.js
const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.requireAuth, profileController);

module.exports = router;
