const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  birthday: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
