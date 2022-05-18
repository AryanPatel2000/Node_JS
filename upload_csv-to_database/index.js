const express = require('express');
const app = express();
const db = require('./models');
const initRoutes = require('./routes/capital.route');
global.__basedir = __dirname + "/..";
app.use(express.urlencoded({ extended:true }));

initRoutes(app);
db.sequelize.sync();

const server = app.listen(3100, () => {
    var port = server.address().port;
    console.log('Example listening on port: ', port);
})