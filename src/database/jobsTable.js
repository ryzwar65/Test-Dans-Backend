const { db } = require('./connection');

exports.jobsTable = async () => {
	await db.any(
		`CREATE TABLE jobs (
        id VARCHAR(255) PRIMARY KEY, 
        type VARCHAR (50) , 
        url TEXT ,
        created_at TEXT , 
        company VARCHAR (150) ,
        company_url TEXT ,
        location VARCHAR (50) ,
        title TEXT ,
        descriptions TEXT ,
        how_to_apply TEXT ,
        company_logo TEXT )`
	);
};
