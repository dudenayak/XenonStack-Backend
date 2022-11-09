const router = require('express').Router();
const Contact = require('../models/contact');

router.post('/contacts', async (req, res) => {
  // console.log(req.body);
  const newContact = new Contact({
    username: req.body.username,
    email: req.body.email,
    birthday: req.body.birthday,
    mobile: req.body.mobile,
    message: req.body.message,
  });
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
