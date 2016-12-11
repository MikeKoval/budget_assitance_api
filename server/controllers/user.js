// import _ from 'lodash';
// import dot from 'dot-object';
// import APIError from '../helpers/APIError';
// import httpStatus from 'http-status';
import couch from '../../config/couch';
// import config from '../../config/env';
import {Curl} from 'node-libcurl';

function sync(req, res, next) {
	const { auth0Id, email, name, accessToken } = req.body;
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

	const db = couch.database(auth0Id);
	db.exists(function (err, exists) {
		if (err) {
			console.log('error', err);
		} else if (exists) {
			console.log('the force is with you.');
		} else {
			console.log('database does not exists.');
			db.create(function(err) {
				console.log (err);
			});
			/* populate design documents */
		}
		res.json({ok: true});
	});
}

export default { sync };
