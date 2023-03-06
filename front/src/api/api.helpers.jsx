import Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');
export const getContentType = () => {
	console.log(csrftoken);
	return {
		'Content-Type': 'application/json',
		'X-CSRFToken': csrftoken,
	};
};
export const errorCatch = (error) =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;
