export const API_URL = `${process.env.REACT_APP_URL}/`;
export const MAILISEARCH_URL = process.env.REACT_APP_MAILISEARCH_URL;

export const getAuthUrl = (string) => `api/auth${string}`;
export const getVideosUrl = (string) => `api/content/videos${string}`;
export const getArticlesUrl = (string) => `api/content/articles${string}`;
export const getConferenciesUrl = (string) =>
	`api/content/conferencies${string}`;
export const getCentersUrl = (string) => `api/content/centers${string}`;
export const getNewsUrl = (string) => `api/content/news${string}`;
export const getRecentViewedUrl = (string) => `api/profile/viewed${string}`;
export const getFavoritesUrl = (string) => `api/profile/favorites${string}`;
export const getCommentsUrl = (string) => `api/forum/comments${string}`;
export const getPostsUrl = (string) => `api/forum/posts${string}`;
export const getRecommendationsUrl = (string) =>
	`api/profile/recommended${string}`;
