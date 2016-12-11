'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _couch = require('../../config/couch');

var _couch2 = _interopRequireDefault(_couch);

var _nodeLibcurl = require('node-libcurl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import _ from 'lodash';
// import dot from 'dot-object';
// import APIError from '../helpers/APIError';
// import httpStatus from 'http-status';
function sync(req, res, next) {
	var _req$body = req.body,
	    auth0Id = _req$body.auth0Id,
	    email = _req$body.email,
	    name = _req$body.name,
	    accessToken = _req$body.accessToken;

	console.log('---auth0Id', auth0Id);

	// const curl = new Curl();

	// const url = config.db.host + ':' + config.db.port + '/_config/admins';
	// console.log('URL', url);

	// curl.setOpt( 'URL',  );
	//
	// curl.on( 'end', function( statusCode, body, headers ) {
	//
	// 	console.info( statusCode );
	// 	console.info( '---' );
	// 	console.info( body.length );
	// 	console.info( '---' );
	// 	console.info( this.getInfo( 'TOTAL_TIME' ) );
	//
	// 	this.close();
	// });

	var db = _couch2.default.database(auth0Id);
	db.exists(function (err, exists) {
		if (err) {
			console.log('error', err);
		} else if (exists) {
			console.log('the force is with you.');
		} else {
			console.log('database does not exists.');
			db.create(function (err) {
				console.log(err);
			});
			/* populate design documents */
		}
		res.json({ ok: true });
	});
}
// import config from '../../config/env';
exports.default = { sync: sync };
module.exports = exports['default'];
//# sourceMappingURL=user.js.map
