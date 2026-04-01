import {GOOGLE_APP_PASSWORD,GOOGLE_USER} from "$env/static/private"

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: GOOGLE_USER,
		pass: GOOGLE_APP_PASSWORD
	}
});



