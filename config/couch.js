import cradle from 'cradle';

import config from './env/index';
const connection = new(cradle.Connection)(config.db.host, config.db.port, {
	auth: {username: config.db.user, password: config.db.password}
});

export default connection;
