const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    NIDNumber: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    bloodGroup: { type: String, required: true },
});

// Password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
