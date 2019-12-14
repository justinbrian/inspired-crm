const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const contacts = require("./routes/api/contacts");
const events = require("./routes/api/events");

const app = express();

// Bodyparser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Config
/* when it is in production */
// const db = process.env.MONGO_URI;
/* when it's not in production */
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("MongoDB successfully connected"))
   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/contacts", contacts);
app.use("/api/events", events);

const port = process.env.PORT || 5000;


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static(path.join(__dirname, "client", "build")));
 
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
 }

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
