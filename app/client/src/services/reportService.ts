export const getReportService = async (reports: any) => {
	const report = await fetch(`http://localhost:3303/final_report/`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(reports),
	});
	return report;
};

export const sendReportService = async (reports: any) => {
	const report = await fetch(`http://localhost:3303/final_report/send`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(reports),
	});
	return report;
};
