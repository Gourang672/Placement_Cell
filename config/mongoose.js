const mongoose = require('mongoose');

const DB = 'mongodb+srv://gourangcharanmishra2001:ccxYfAwqC7Rdo1Wl@cluster0.ageetyg.mongodb.net/PlacementCell';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
