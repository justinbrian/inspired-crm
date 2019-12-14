const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Event model
const Event = require("../../models/Event");
// Load User model
const User = require("../../models/User");

//=================================================================
// @route POST api/events/add
// @desc add new events
// @access Private
// @req: email, tokenhash, start, end, title
// @res: {_id, start, end, title, date} OR 401
router.post("/add", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // Check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // add one event
      const newEvent = new Event({
        user: user._id,
        start: req.body.eventStart,
        end: req.body.eventEnd,
        title: req.body.eventName,
      });
      newEvent
        .save()
        .then(event => res.json(event))
        .catch(err => {
          console.log(err); 
          res.status(500);
        });
    } else{
        res.status(401).send('Unauthorized');
    }
  });
});
//=================================================================
// @route POST api/events/get
// @desc get all events from db
// @access Private
// @req: email, tokenhash
// @res: [{_id, user, start, end, title, date}] OR 401
router.post("/get", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;

  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // returns all events of user  
      Event
        .find({'user': user._id})
        .exec((err, events) => {
            return res.json (events);
        })
    } else{
      res.status(401).send('Unauthorized');
    }
  }).catch(err => {
      console.log(err);
      res.status(500);
    });
});
//=================================================================
// @route POST api/events/delete
// @desc delete one event
// @access Private
// @req: email, tokenhash, id
// @res: 'DELETED' OR 401
router.post("/delete", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  // check validation
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      // delete one event
      Event.deleteOne(
        { _id: req.body.id },
        (err) => {console.log(err)})
          .then(res.status(200).send('DELETED'));
    } else{
      res.status(401).send('Unauthorized');
    }
  }).catch(err => {
      console.log(err); 
      res.status(500);
    });
});
//=================================================================
// @route POST api/events/update
// @desc update one event, EDIT event
// @access Private
// @req: email, tokenhash, id, start, end, title
// @res: 'UPDATED' OR 401
router.post("/update", 
passport.authenticate('jwt', { session: false }), 
(req, res) => {
  const id = req.body.id;
  const email = req.body.email;
  const tokenhash = req.body.tokenhash;
  // update one event
  User.findOne({ email }).then(user => {
    if (user.tokenhash == tokenhash){
      Event.findOneAndUpdate({'_id': id},{ 
          '$set': {
          'start': req.body.eventStart,
          'end': req.body.eventEnd,
          'title': req.body.eventName
          }
      }, {useFindAndModify: false})
      .then(res.status(200).send('UPDATED'))
      .catch(function (err, managerparent) {
        if (err) throw err;
        console.log(managerparent);
        res.status(500);
      });
    } else{
      res.status(401).send('Unauthorized');
    }
  });
});

module.exports = router;