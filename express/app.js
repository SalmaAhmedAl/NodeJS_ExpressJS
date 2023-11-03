const express = require("express");
const app = express();

const people = require('./routes/people');

//static assets
app.use(express.static('./methods-public')); //that's build in middleware
//parse from data, handling the form submission, so then, I have access to the form data that is being send with JS in the req and res
app.use(express.urlencoded({extended: false}));

//handling incoming json data - parse json
app.use(express.json());

//The base route
app.use('/api/people', people);

app.post('/login', (req, res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome, ${name}`);
    }
    res.status(401).send('Please, Provide Credentials');
});

app.listen(5000, () => {
    console.log("I'm listening on port 5000...");
});