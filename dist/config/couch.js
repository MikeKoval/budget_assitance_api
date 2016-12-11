'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cradle = require('cradle');

var _cradle2 = _interopRequireDefault(_cradle);

var _index = require('./env/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = new _cradle2.default.Connection(_index2.default.db.host, _index2.default.db.port, {
	auth: { username: _index2.default.db.user, password: _index2.default.db.password }
});

exports.default = connection;
module.exports = exports['default'];
//# sourceMappingURL=couch.js.map
