import { auditRequest, auditTemplate } from "$lib/components/emailTemplates/auditRequest";
import { transporter } from "$lib/nodemailer";
import { json, type RequestHandler } from '@sveltejs/kit';
 


 
export const POST: RequestHandler = async ({request  })=> {
 
const body = await request.json()
 
    
const emailHtml = auditTemplate(body.website)
    const options = {
	from: 'ggmtechhub@gmail.com',
	to: body.email,
	subject: 'GGM Technologies — Web & App Development | SEO | UI/UX | Marketing',
	html: emailHtml
};
    const options2 = {
	from: 'ggmtechhub@gmail.com',
	to: 'ggmtechhub@gmail.com',
	subject: 'GGM Technologies — Web & App Development | SEO | UI/UX | Marketing',
	html: auditRequest(body)
};
transporter.sendMail(options);
transporter.sendMail(options2);
   return json(body)
}