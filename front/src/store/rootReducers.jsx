import { reducer as userReducer } from './user/user.slice';
import { reducer as forumReducer } from './forum/forum.slice';

export const reducers = {
	user: userReducer,
	forum: forumReducer,
};
console.log(reducers);
