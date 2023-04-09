import {Navigate} from 'react-router-dom';

export const routes = {
    HOME: {link: '/', name: 'Home'},
    PROFILE: {link: '/profile', name: 'Profile'},
    LOGIN: {link: '/login', name: 'Login'},
    REGISTER: {link: '/register', name: 'Registration'},
    VIDEOS: {link: '/videos', name: 'Videos'},
    NEWS: {link: '/news', name: 'News'},
    STUDY: {link: '/study', name: 'Study'},
    CONFERENCIES: {link: '/conferencies', name: 'Conferencies'},
    CENTERS: {link: '/centers', name: 'Centers'},
    PHOTOS: {link: '/photos', name: 'Photos'},
	  FORUM: {link: '/forum', name: 'Forum'},
	  CONTACTS: {link: '/contacts', name: 'Contacts'},
};

export function PublicRoute({isAuth, to = routes.HOME.link, children}) {
    return !isAuth ? children : <Navigate to={to} replace/>;
}

export function PrivateRoute({isAuth, to = routes.HOME.link, children}) {
    return !!isAuth ? children : <Navigate to={to} replace/>;
}
