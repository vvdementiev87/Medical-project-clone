import * as userActions from './user/user.actions';
import * as forumActions from './forum/forum.actions';

export const allActions = {
	...userActions,
	...forumActions,
};
