const mongoose = require('mongoose');

const conn = `mongodb://localhost:27017/mongo_db`;
mongoose.connect(conn, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => { console.log(`CONNECTED...`);})