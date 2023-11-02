const express = require("express");
const app = express();
const morgan = require("morgan");
const {products} = require("./data");
const logger = require("./logger");
const authorize = require("./authorize");

// app.use([logger, authorize]); //will be executed in the order they are written
// or
// app.use("/api", logger);

// app.use(express.static("./public"));
// app.use("/api", logger);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    console.log(req.user);
    res.send("Home Page");
});

// app.use(logger);
app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/items', (req, res) => {
    res.send("Items Page");
}); 


app.listen(5000, () => {
    console.log("I'm listening on port 5000...");
});