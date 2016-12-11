import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import userCtrl from '../controllers/user';

const router = express.Router();	// eslint-disable-line new-cap

router.route('/sync')
/** POST /api/users/sync - sync auth0 info with user entity */
	.post(validate(paramValidation.syncUser), userCtrl.sync);

export default router;
