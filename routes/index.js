const express = require('express')
const route = express.Router()
const getUser = require("../controller/userController")

route.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
route.get("/api/hello", getUser)

module.exports = route
