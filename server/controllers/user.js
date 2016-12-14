// import _ from 'lodash';
// import dot from 'dot-object';
// import APIError from '../helpers/APIError';
// import httpStatus from 'http-status';
import couch from '../../config/couch';
// import config from '../../config/env';

function sync(req, res, next) {
	const { auth0Id } = req.body;

	const db = couch.database(auth0Id);
	db.exists(function (err, exists) {
		if (err) {
			console.log('error', err);
			res.json({ok: true});
		} else if (exists) {
			console.log('the force is with you.');
			res.json({ok: true});
		} else {
			console.log('database does not exists.');
			db.create(function(err) {
				console.log (err);
				if (!err) {
					createAccounts(db, (err) => {
						if (err) return next(err);
						createCategories(db, (err) => {
							if (err) return next(err);
							res.json({ok: true});
						});
					});
				}
			});
			/* populate design documents */
		}
	});
}

function createAccounts(db, next) {
	db.save({entityType: 'account', name: 'Cash', initialValue: 0, currencyId: 'UAH'}, next);
}

function createCategories(db, next) {
	const promises = [];

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Food', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Shopping', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Electronics', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Gifts', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Communication', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Car', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Salary', type: 2}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Housing', type: 1}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	promises.push(new Promise((resolve, reject) => {
		db.save({entityType: 'category', name: 'Scholarship', type: 2}, (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	}));

	Promise.all(promises)
		.then(value => {
			next(null, value);
		}, reason => {
			next(reason)
		});
}

export default { sync };
