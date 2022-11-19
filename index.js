const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const connection = require('./src/database/connection');

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

connection;

app.listen(5000, () => {
	console.log('SERVER IS RUNNING AT PORT 5000');
});
