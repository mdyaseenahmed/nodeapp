const express = require('express');
const itemArray = require('./itemArray')
const router = express.Router();

router.use("/",(req, res, next) => {
    console.log("API Called.!");
    next();
})

router.get("/getItems", (req, res) => {
    console.log(itemArray)
    res.send(itemArray);
})

module.exports = router;