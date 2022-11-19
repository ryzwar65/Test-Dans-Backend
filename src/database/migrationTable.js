const { jobsTable } = require('./jobsTable');
const migrate = async () => {
	await jobsTable();
};

migrate();
