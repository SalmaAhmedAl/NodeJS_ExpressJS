const express = require("express");
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

//static assets
app.use(express.static('./methods-public')); //that's build in middleware
//parse from data, handling the form submission, so then, I have access to the form data that is being send with JS in the req and res
app.use(express.urlencoded({extended: false}));

//handling incoming json data - parse json
app.use(express.json());

//The base route
app.use('/api/people', people);

// app.use('/login', auth);


app.listen(5000, () => {
    console.log("I'm listening on port 5000...");
});