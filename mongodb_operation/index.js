const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config();

const user = require('./route/user.route');
const db = require('./db.js');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

var corsOptions = {
    origin: 'http://localhost:4000',
    
}
 app.use(cors(corsOptions));

 app.use('/user',  user.getRouter());


app.listen(port, () => {
    console.log(`Node server is running on port ${port}`);
})

