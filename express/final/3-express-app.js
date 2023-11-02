const express = require("express");
const path = require('path');
const app = express();

//setup static and middleware

//make all the files in public folder available to the world
//all files are static assets
app.use(express.static('./public'));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar_app/index.html"));
//     second way : adding to static assets
//     third way : SSR server-side rendering
//     There're two options for Express.js: API (we mean setting up an http interface to interact with our data, data is sent using JSON using res.json()) 
//     and SSR (we set up templates and we render those templates on the server and send the rendered HTML to the client using res.render()).
// });


app.all('*', (req, res) => {
    res.status(404).send('<h1 style="text-align: center;">Resource not found.</h1>');
});

app.listen(5000, () => {
  console.log("I'm listening on port 5000...");
});
