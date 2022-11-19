const pgp = require('pg-promise')({});

const connection = {
	host: 'localhost',
	port: 5432,
	database: 'test_dans',
	user: 'postgres',
	password: 'riyanwar65',
	max: 30
};

const db = pgp(connection);
db
	.connect()
	.then(function(obj) {
		console.log('CONNECTED');
		obj.done(); // success, release connection;
	})
	.catch(function(error) {
		console.log('ERROR:', error.message);
	});

module.exports = { db, pgp };
