import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import config from './env';

const { auth } = config.mail;
export default nodemailer.createTransport(smtpTransport({
	service: 'Gmail',
	auth
}));
