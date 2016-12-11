import Joi from 'joi';

export default {
// POST /api/users/sync
  syncUser: {
    body: {
      accessToken: Joi.string().required(),
      auth0Id: Joi.string().required(),
      name: Joi.string(),
      email: Joi.string().email()
    }
  },
};
