export const API_URL = `${process.env.REACT_APP_URL}/`;

export const getAuthUrl = (string) => `api/auth${string}`;
export const getVideosUrl = (string) => `api/content/videos${string}`;
export const getNewsUrl = (string) => `api/content/articles${string}`; //to be changed for news
export const getArticlesUrl = (string) => `api/content/articles${string}`;
