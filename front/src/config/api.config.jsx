export const API_URL = `${process.env.REACT_APP_URL}/api/`;

export const getAuthUrl = (string) => `auth${string}`;
export const getVideosUrl = (string) => `content/videos${string}`;
export const getNewsUrl = (string) => `content/articles${string}`; //to be changed for news
export const getArticlesUrl = (string) => `content/articles${string}`;
