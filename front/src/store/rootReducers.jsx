import {reducer as userReducer} from './user/user.slice';
import {reducer as forumReducer} from './forum/forum.slice';
import {reducer as toastrReducer} from 'react-redux-toastr';

export const reducers = {
    user: userReducer,
    toastr: toastrReducer,
    forum: forumReducer
};
