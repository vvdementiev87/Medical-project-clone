export const API_URL = `${process.env.REACT_APP_URL}/`;
export const MAILISEARCH_URL = process.env.REACT_APP_MAILISEARCH_URL;

export const getRegistrationUrl = (string) => `api/registration${string}`;
export const getAuthUrl = (string) => `api/auth${string}`;
export const getVideosUrl = (string) => `api/content/videos${string}`;
export const getArticlesUrl = (string) => `api/content/articles${string}`;
export const getConferenciesUrl = (string) =>
	`api/content/conferences${string}`;
	export const getConferenciesRegistrationUrl = (string) =>
	`api/conferences${string}`;
export const getCentersUrl = () => `api/community/centers`;
export const getCenterUrl = (string) => `api/community/center${string}`;
export const getCentersCategoriesUrl = () => `api/community/centers/categories`;
export const getNewsUrl = (string) => `api/content/news${string}`;
export const getRecentViewedUrl = (string) => `api/profile/viewed${string}`;
export const getFavoritesUrl = (string) => `api/profile/favorites${string}`;
export const getCommentsUrl = (string) => `api/forum/comments${string}`;
export const getPostsUrl = (string) => `api/forum/posts${string}`;
export const getRecommendationsUrl = (string) =>
	`api/profile/recommended${string}`;
export const getGalleryUrl = (string) => `api/content/gallery${string}`;
export const getNormativesUrl = (string) => `api/content/normatives${string}`;
export const getNotificationsUrl = (string) => `api/notification${string}`;
