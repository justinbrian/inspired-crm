const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validatePasswordUpdate = require("../../validation/updatepass");
const validateProfileUpdate = require("../../validation/updateprofile")

// Load User model
const User = require("../../models/User");
// Load Contact model
const Contact = require("../../models/Contact");

//=================================================================
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email.toLowerCase();
  User.findOne({ email: email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: email,
        password: req.body.password,
      });
      console.log(newUser)

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
//=================================================================
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          email: user.email,
          fname: user.fname,
          lname: user.lname,
          company: user.company
        };
        // Sign token
        jwt.sign(
          payload,
          /* when it is in production */
          //change keys.secretOrKey to process.env.secretOrKey
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            // hash the token then save it in db
            var hash = bcrypt.hashSync(token,bcrypt.genSaltSync(10))
            user.tokenhash = hash;
            user.save().catch(err => console.log(err));
            res.json({
              success: true,
              tokenhash: hash,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});
//=================================================================
// @route POST api/users/updateprofile
// @desc update user profile info
// @access Private
router.post("/updateprofile", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check validation
    const email = req.body.email;
    const tokenhash = req.body.tokenhash;
    const check = {
      fname: req.body.fname,
      lname: req.body.lname
    };
    const { errors, isValid } = validateProfileUpdate(check);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email }).then(user => {
      if (user.tokenhash == tokenhash) {
        // update profile
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.company = req.body.company;

        user
            .save()
            .then(user => {
              const payload = {
                email: user.email,
                fname: user.fname,
                lname: user.lname,
                company: user.company
              };
              // Sign token
              jwt.sign(
                payload,
                /* when it is in production */
                //change keys.secretOrKey to process.env.secretOrKey
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    token: token, 
                    payload: payload
                  });
                }
              );
            })
            .catch(err =>{
              console.log(err);
              res.status(500);
            });
        
      }else{
        res.status(401).send("Unauthorized");
      }
    }).catch(err => {
      console.log(err);
      res.status(500);
    });
  }
);
//=================================================================
// @route POST api/users/updatepassword
// @desc update user password
// @access Private
router.post("/updatepassword", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Check validation
    const email = req.body.email;
    const tokenhash = req.body.tokenhash;
    const password = req.body.password;
    const newpassword = req.body.newpassword;
    const check = {
      newpassword: req.body.newpassword,
      newpassword2: req.body.newpassword2
    };
    User.findOne({ email }).then(user => {
      if (user.tokenhash == tokenhash) {
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // check validation
            const { errors, isValid } = validatePasswordUpdate(check);
            if (!isValid) {
              return res.status(400).json(errors);
            }
            // save new password
            // hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newpassword, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then(user => res.json({
                  passwordchange: "success"
                }))
                .catch(err => {
                  console.log(err);
                  res.status(500);
                });
              });
            });
          }else{
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        })
      }else{
        res.status(401).send("Unauthorized");
      }
    }).catch(err => {
      console.log(err);
      res.status(500);
    });
  }
);
//=================================================================
// @route POST api/users/getgoals
// @desc gets user goals
// @access Private
router.post("/getgoals", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const email = req.body.email;
    const tokenhash = req.body.tokenhash;
    User.findOne({ email }).then(user => {
      if (user.tokenhash == tokenhash) {
        
        Contact.find({
          user: user._id,
          goaltracker: true
        }).exec((err, contacts) => {
          const payload = {
            plan: user.plan,
            startdate: user.startdate,
            nrog: user.nrog,
            nrogdone: user.nrogdone,
            fug: user.fug,
            fugdone: user.fugdone,
            trog: user.trog,
            trogdone: user.trogdone,
            trackedcontacts: contacts
          }
          return res.status(200).json(payload);
        });
        
      }else{
        res.status(401).send("Unauthorized");
      }
    }).catch(err => {
        console.log(err);
        res.status(500);
    });
  }
);
  //=================================================================
// @route POST api/users/setgoals
// @desc sets user goals
// @access Private
router.post("/setgoals", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const email = req.body.email;
    const tokenhash = req.body.tokenhash;
    User.findOne({ email }).then(user => {
      if (user.tokenhash == tokenhash) {
        user.plan = req.body.plan
        user.startdate = req.body.startdate
        user.nrog = req.body.nrog
        user.nrogdone = req.body.nrogdone
        user.fug = req.body.fug
        user.fugdone = req.body.fugdone
        user.trog = req.body.trog
        user.trogdone = req.body.trogdone
        user
          .save()
          .then(user => {
            const payload = {
              plan: user.plan,
              startdate: user.startdate,
              nrog: user.nrog,
              nrogdone: user.nrogdone,
              fug: user.fug,
              fugdone: user.fugdone,
              trog: user.trog,
              trogdone: user.trogdone
            }
            return res.status(200).json(payload);
          });
      }else{
        res.status(401).send("Unauthorized");
      }
    }).catch(err => {
      console.log(err);
      res.status(500);
    });
  }
);


module.exports = router;
