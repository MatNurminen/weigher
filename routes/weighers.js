const express = require('express');
const router = express.Router();

// Weigher model
const Weigher = require('../models/Weigher');

// @route   GET api/weighers
// @desc    Get weighers
// @access  Public
router.get('/', (req, res) => {
  Weigher.find()
    .sort({ weight: -1 })
    .then((weighers) => res.json(weighers))
    .catch((err) =>
      res.status(404).json({ noweighersfound: 'No weighers found' })
    );
});

// @route   POST api/weighers
// @desc    Create weigher
// @access  Public
router.post('/', (req, res) => {
  const newWeigher = new Weigher({
    weight: req.body.weight,
  });
  newWeigher.save().then((weigher) => res.json(weigher));
});

module.exports = router;
