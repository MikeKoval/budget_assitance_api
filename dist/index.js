'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('app-module-path/register');

var _env = require('config/env');

var _env2 = _interopRequireDefault(_env);

var _express = require('config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express2.default.listen(_env2.default.port, function () {
	console.log('server started on port ' + _env2.default.port + ' (' + _env2.default.env + ')');
});

exports.default = _express2.default;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
