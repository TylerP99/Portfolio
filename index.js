const express = require("express");
const cors = require("cors");

const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});