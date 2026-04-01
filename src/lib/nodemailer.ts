import {env} from "$env/dynamic/private"

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: env.GOOGLE_USER,
		pass: env.GOOGLE_APP_PASSWORD
	}
});



