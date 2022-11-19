const { db } = require('../database/connection');

exports.checkData = async () => {
	return await db.oneOrNone(`SELECT COUNT(id) as countData FROM jobs `);
};

exports.insertData = async (data) => {
	return await db.any(
		'INSERT INTO jobs(id,type,url,created_at, company, company_url, location, title, descriptions, how_to_apply, company_logo) VALUES($<id>, $<type>, $<url>, $<created_at>, $<company>, $<company_url>, $<location>, $<title>, $<description>, $<how_to_apply>, $<company_logo> )',
		{
			id: data.id,
			type: data.type,
			url: data.url,
			created_at: data.created_at,
			company: data.company,
			company_url: data.company_url,
			location: data.location,
			title: data.title,
			description: data.description,
			how_to_apply: data.how_to_apply,
			company_logo: data.company_logo
		}
	);
};

exports.getData = async ({ limit, offset }) => {
	return await db.any('SELECT * FROM jobs LIMIT $<limit> OFFSET $<offset>', {
		limit: limit,
		offset: offset
	});
};

exports.getDataById = async ({ id }) => {
	return await db.oneOrNone('SELECT * FROM jobs WHERE id = $<id>', {
		id: id
	});
};

exports.searchData = async ({ description, location, fulltime }) => {
	if (fulltime == 'true') {
		return await db.any(
			'SELECT * FROM jobs WHERE descriptions LIKE $<description> AND location LIKE $<location> AND type = $<fulltime>',
			{
				description: '%' + description + '%',
				location: '%' + location + '%',
				fulltime: 'Full Time'
			}
		);
	} else {
		return await db.any('SELECT * FROM jobs WHERE descriptions LIKE $<description> AND location LIKE $<location>', {
			description: '%' + description + '%',
			location: '%' + location + '%'
		});
	}
};
