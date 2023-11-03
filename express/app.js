const express = require("express");
const {people} = require('./data');
const app = express();

//static assets
app.use(express.static('./methods-public')); //that's build in middleware
//parse from data, handling the form submission, so then, I have access to the form data that is being send with JS in the req and res
app.use(express.urlencoded({extended: false}));

//handling incoming json data - parse json
app.use(express.json());

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data: people});
});

app.post('/api/people', (req, res)=>{
    const {name} = req.body; //the middleware makes it possible now
    if(!name){
        return res.status(400).json({success: false, ms:'Please provide name value.'});
    }
    res.status(201).json({success: true, person: name});
});

app.post('/login', (req, res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome, ${name}`);
    }
    res.status(401).send('Please, Provide Credentials');
});

app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params;
    const name = req.body;

    const person = people.find((person)=>{
        person.id === Number(id);
    });

    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `no person with id ${id}`});
    }
    const newPerson = people.map((person)=>{
        if (person.id === Number(id)){
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success: true, data: newPerson});
});

app.listen(5000, () => {
    console.log("I'm listening on port 5000...");
});