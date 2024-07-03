const express = require('express');
const route = require('./routes/index');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.ip);
    next();
})
// app.use(ipMiddleware);
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', route)

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})
