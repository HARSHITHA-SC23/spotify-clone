export const API_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}`; // `#{BACKEND_BASE_URL}#`;
export const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
export const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
export const CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`;
export const URL = `/`;

//Authentication API Endpoint
export const API_CLIENT_LOGIN = `https://accounts.spotify.com/api/token`
export const API_AUTH_URL = `https://accounts.spotify.com/authorize`

//Users API Endpoint
export const API_GET_CURRENT_USER_DETAILS = `${API_ENDPOINT}/me`

//Tracks API Endpoint
export const TRACK_RECOMMENDATION = `${API_ENDPOINT}/recommendations`


// Token Constants
export const TOKEN_STORAGE_KEY = `oauth_token`;
export const REFRESH_TOKEN_STORAGE_KEY = `oauth_refresh_token`;
export const TOKEN_STORAGE_EXPIRATION_TIME = `oath_token_expiration_time`;
export const TOKEN_STORAGE_REFRESH_TIME = `oath_token_refresh_time`;
export const TOKEN_STORAGE_PROMPT_REFRESH_TIME = `oath_token_prompt_refresh_time`;
export const REFRESH_TOKEN_WITH_MINS_REMAINING = 15;
export const PROMPT_REFRESH_TOKEN_WITH_MINS_REMAINING = 2;
export const TOKEN_EXPIRATION = 3600;


//Authentication 
const scopes  = [
    "playlist-read-private",
    "playlist-read-collaborative", 
    "playlist-modify-private", 
    "playlist-modify-public"
]

export const loginUrl = `${API_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
