import Cookies from 'js-cookie';

export const saveTokensStorage = ({ accessToken }) => {
	Cookies.set('accessToken', accessToken);
};
export const saveToStorage = (data) => {
	saveTokensStorage(data);
	localStorage.setItem('user', JSON.stringify(data.user.email));
};
export const removeTokensStorage = () => {
	Cookies.remove('accessToken');
};
