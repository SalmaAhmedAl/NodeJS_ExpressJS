const express = require("express");
let {people} = require('../data');

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({success:true, data: people});
});

router.post('/', (req, res)=>{
    const {name} = req.body; //the middleware makes it possible now
    if(!name){
        return res.status(400).json({success: false, ms:'Please provide name value.'});
    }
    res.status(201).json({success: true, person: name});
});


router.put('/:id', (req, res)=>{
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

router.delete('/:id', (req, res)=>{
    const person = people.find((person)=>{
        person.id === Number(req.params.id);
    });
    if(!person){
        return res
        .status(404)
        .json({success: false, msg: `no person with id ${req.params.id}`});
    }
    const newPeople = people.filter((person)=>{
        person.id !== Number(req.params.id);
    });
    return res.status(200).json({success: true, data: newPeople});
});

module.exports = router;