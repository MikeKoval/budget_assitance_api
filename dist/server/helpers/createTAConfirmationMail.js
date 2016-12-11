'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createTAConfirmationMail;
/* istanbul ignore next */
function renderMailBody(address, user, hash) {
	return '<div>\n\t\t\t\t<p>Username: ' + user.username + '</p>\n\t\t\t\t<p>Name: ' + user.name + '</p>\n\t\t\t\t<p>Nickname: ' + user.nickname + '</p>\n\t\t\t\t<p>Email: ' + user.email + '</p>\n\t\t\t\t<p>Phone number: ' + user.phone_number + '</p>\n\t\t\t\t<p>Wants to become TA. <a href="' + address + 'api/ta-request/confirm/' + hash + '">Confirm</a>\n\t\t\t\t<a href="' + address + 'api/ta-request/decline/' + hash + '">Decline</a></p>\n\t\t</div>';
}
/* istanbul ignore next */
function createTAConfirmationMail(address, user, hash, _ref) {
	var from = _ref.from,
	    to = _ref.to;

	return {
		from: from,
		to: to,
		subject: 'Become TA request',
		html: renderMailBody(address, user, hash)
	};
}
module.exports = exports['default'];
//# sourceMappingURL=createTAConfirmationMail.js.map
