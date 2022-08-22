const express = require('express');

const app = express();

const routes = require('./router');

app.use("/api", routes)

const server = app.listen(5000, () => {
    console.log("Server is up & running")
})