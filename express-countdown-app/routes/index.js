var express = require('express');
var router = express.Router();
var staticModels = require('../staticModels/events');

router.get('/events', function (req, res, next) {
  res.send(JSON.stringify(staticModels.events));
});

router.post('/add-event', function (req, res, next) {
  staticModels.events.push({
    title: req.body.title,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    background: req.body.background
  });
});

module.exports = router;
