import http from './http';

const sendEmailUrl = '/sendMail';

const sendEmail = (params) => {
	return http.post(sendEmailUrl, params);
};

export { sendEmail };
