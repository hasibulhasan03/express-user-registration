const express = require('express');
const {
    registerUser,
    loginUser,
    getSingleProfile,
    getAllProfiles,
    updateProfile,
    deleteProfile
} = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// User APIs
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getSingleProfile);
router.get('/profiles', authMiddleware, getAllProfiles);
router.put('/profile/:id', authMiddleware, updateProfile);
router.delete('/profile/:id', authMiddleware, deleteProfile);

module.exports = router;
