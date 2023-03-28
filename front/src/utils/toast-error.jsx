import { toastr } from 'react-redux-toastr';
import { errorCatch } from '../api/api.helpers';

export const toastrError = (error, title = null) => {
	const message = errorCatch(error);
	toastr.error(title || 'Error request', message);
	throw message;
};
