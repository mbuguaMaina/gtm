export function auditTemplate(website: string) {
	return `
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>
		GGM Technologies - Web & App Development | SEO | UI/UX | Marketing Solutions
	</title>
</head>

<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

	<div style="max-width:600px;margin:0 auto;background:white;padding:24px">

		<h2>Website Audit Request Received</h2>

		<p>Hello,</p>

		<p>
			Thank you for requesting a <b>Website Audit</b> for
			<b>${website}</b> from <b>GGM Technologies</b>.
		</p>

		<p>
			We have successfully received your request, and our team is
			reviewing your website to identify areas for improvement.
		</p>

		<p><b>What happens next:</b></p>

		<ul>
			<li>We analyze your website</li>
			<li>We prepare audit report</li>
			<li>You receive recommendations</li>
		</ul>

		<p>
			This process takes <b>24–48 hours</b>.
		</p>

		<hr />

		<a
			href="https://ggmtechnologies.co.ke"
			style="
				display:inline-block;
				padding:12px 18px;
				background:#2563eb;
				color:white;
				text-decoration:none;
				border-radius:6px;
				font-weight:bold;
			"
		>
			GGM Technologies
		</a>

		<p style="margin-top:20px;font-size:12px;color:#666">
			GGM Technologies — Web & App Development | SEO | UI/UX | Marketing
		</p>

	</div>

</body>
</html>
`;
}
export function auditRequest(data: any) {
	return `
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>
		GGM Technologies - Web & App Development | SEO | UI/UX | Marketing Solutions
	</title>
</head>

<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">

	<div style="max-width:600px;margin:0 auto;background:white;padding:24px">

		<h2>Website Audit Request Received</h2>

		<p>Hello,</p>

		<p>
			You have a <b>Website Audit</b> for
			<b>${data.website}</b>.
		</p>

		 
<h2>Contact Information:</h2>
		<ul>
			<li>Phone: <strong>${data.phone}</strong></li>
			<li>Phone: <strong>${data.email}</strong></li>
		 
		</ul>

		<p>
			This process takes <b>24–48 hours</b>.
		</p>

		<hr />

		<a
			href="https://ggmtechnologies.co.ke"
			style="
				display:inline-block;
				padding:12px 18px;
				background:#2563eb;
				color:white;
				text-decoration:none;
				border-radius:6px;
				font-weight:bold;
			"
		>
			GGM Technologies
		</a>

		<p style="margin-top:20px;font-size:12px;color:#666">
			GGM Technologies — Web & App Development | SEO | UI/UX | Marketing
		</p>

	</div>

</body>
</html>
`;
}