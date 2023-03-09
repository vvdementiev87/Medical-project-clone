export const API_URL = `${process.env.REACT_APP_URL}/`;

export const getAuthUrl = (string) => `api${string}`;
export const getVideosUrl = (string) => `api/content/videos${string}`;
export const getNewsUrl = (string) => `api/content/articles${string}`;
