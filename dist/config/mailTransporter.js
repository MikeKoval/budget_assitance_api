'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerSmtpTransport = require('nodemailer-smtp-transport');

var _nodemailerSmtpTransport2 = _interopRequireDefault(_nodemailerSmtpTransport);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = _env2.default.mail.auth;
exports.default = _nodemailer2.default.createTransport((0, _nodemailerSmtpTransport2.default)({
	service: 'Gmail',
	auth: auth
}));
module.exports = exports['default'];
//# sourceMappingURL=mailTransporter.js.map
