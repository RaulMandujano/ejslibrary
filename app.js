const express = require("express");

const mustacheExpress = require("mustache-express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index", {title:"Hello", message:"Hello World"});
}); 

app.listen(port, () => console.log(`localhost:3000`));
