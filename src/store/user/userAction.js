import axios from "axios";
import { API_GET_CURRENT_USER_DETAILS } from "../../constants";

export const fetchCurrentUserRequest = () => ({
    type: "FETCH_CURRENT_USER_REQUEST"
});

export const fetchCurrentUserSuccess = (userData) => ({
    type: "FETCH_CURRENT_USER_SUCCESS",
    payload: userData,
});

export const fetchCurrentUserFailure = (error) => ({
    type: "FETCH_CURRENT_USER_FAILURE",
    payload: error,
});

export const fetchCurrentUserData = () => (dispatch) => {
    dispatch(fetchCurrentUserRequest());
    const loginToken = window.localStorage.getItem('authToken');

    const config = {
        headers: {
            Authorization: `Bearer ${loginToken}`
        }
    };

    axios
        .get(API_GET_CURRENT_USER_DETAILS, config)
        .then((response) => {
            dispatch(fetchCurrentUserSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchCurrentUserFailure(error));
        })
}