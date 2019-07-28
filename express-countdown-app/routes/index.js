var express = require('express');
var router = express.Router();
var axios = require('axios');
var models = require('../models');
var staticModels = require('../staticModels/events');

//////////// Get Events /////////////////

router.get('/events', function (req, res, next) {
  models.events.findAll({
    where: {
      Deleted: null
    }
  })
  .then(eventsFound => {
    res.send(eventsFound)
  })
  // res.send(JSON.stringify(staticModels.events));
});

//////////// Create Event //////////////

router.post('/add-an-event', function (req, res, next) {
  models.events.findOrCreate({
    where: {
      Title: req.body.title
    },
    defaults: {
      Year: req.body.year,
      Month: req.body.month,
      Day: req.body.day,
      Background: req.body.background
    }
  })
    .spread(function (result, created) {
      if (created) {
        res.send('wow');
      } else {
        res.send('close, but.....');
      }
    });
});



module.exports = router;
