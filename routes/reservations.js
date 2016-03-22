'use strict';
var express = require('express');
var router = express.Router();
var Reservations = require('../models/model.js');
var moment = require('moment');

router.get('/', function(req, res) {
  Reservations.find({}, function(err, data) {
    if(err) {return res.status(400).send(err);}
    res.send(data);
  });
});

router.put('/:id', function(req, res) {
  Reservations.findById({ _id: req.params.id }, function(err, data) {
  if(err) { return res.status(400).send(err); } //error check

    data.time = req.body.time; //create a new reservation obj
    data.patronName = req.body.patronName;
    data.partySize = req.body.partySize;
    data.allergies = req.body.allergies;
    data.checkedIn = req.body.checkedIn;
    data.phoneNumber = req.body.phoneNumber;

    data.save(function(err) { //save the data into the database
      if(err){ return res.status(400).send(err); } //error check
      res.send(data); //send to the database
    });
  });
});

router.post('/', function(req, res) {
  var newRes = new Reservations();
  newRes.time = req.body.time;
  newRes.patronName = req.body.patronName;
  newRes.partySize = req.body.partySize;
  newRes.allergies = req.body.allergies;
  newRes.checkedIn = req.body.checkedIn;
  newRes.phoneNumber = req.body.phoneNumber;

  newRes.save(function(err, data) {
    if(err) { return res.status(400).send(err); }
    res.send(data);
  });
});

router.delete('/:id', function(req, res) {
  Reservations.findByIdAndRemove({_id: req.params.id}, function(err, data) {
    if(err) { return res.status(400).send(err); }
    res.send('Successfully deleted');
  });
});

router.get('/:id', function(req, res) {
  Reservations.find({_id: req.params.id}, function(err, data) {
    if(err) { return res.status(400).send(err); }
    res.send(data);
  });
});

router.get('/name/:patronName', function(req, res) {
  Reservations.find({ patronName: req.params.patronName }, function(err, data) {
    if(err) { return res.status(400).send(err); }
    res.send(data);
  });
});

router.get('/time/:time', function(req, res) {
  Reservations.find({ time: req.params.time }, function(err, data) {
    if(err) { return res.status(400).send(err); }
    res.send(data);
  });
});


module.exports = router;
