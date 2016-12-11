'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // POST /api/users/sync
  syncUser: {
    body: {
      accessToken: _joi2.default.string().required(),
      auth0Id: _joi2.default.string().required(),
      name: _joi2.default.string(),
      email: _joi2.default.string().email()
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=param-validation.js.map
