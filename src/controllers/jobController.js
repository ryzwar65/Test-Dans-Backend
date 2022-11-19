const axios = require('axios');
const https = require('https');
const { checkData, insertData, getData, searchData, getDataById } = require('../models/jobs');
exports.importAll = async (req, res) => {
	try {
		const agent = new https.Agent({
			rejectUnauthorized: false
		});
		const data = await axios.get(`https://dev3.dansmultipro.co.id/api/recruitment/positions.json`, {
			httpsAgent: agent
		});
		const a = await checkData();
		if (a.countdata == 0) {
			data.data.map(async (val) => {
				await insertData(val);
			});
			return res.status(200).json({
				message: 'Data Berhasil di Import'
			});
		} else {
			return res.status(200).json({
				message: 'Data Sudah di Import'
			});
		}
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
};

exports.get = async (req, res) => {
	try {
		const query = req.query;
		const agent = new https.Agent({
			rejectUnauthorized: false
		});
		const data = await getData(query);
		return res.status(200).json(data);
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
};

exports.getSearch = async (req, res) => {
	try {
		const query = req.query;
		const data = await searchData(query);
		return res.status(200).json(data);
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
};

exports.getId = async (req, res) => {
	try {
		const params = req.params;
		const data = await getDataById(params);
		return res.status(200).json(data);
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
};
