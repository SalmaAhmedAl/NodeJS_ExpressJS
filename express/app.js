const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json(
        [{name: "John", age: 22}, {name: "Peter", age: 23}]
    );
});


app.listen(5000, () => {
    console.log("I'm listening on port 5000...");
});