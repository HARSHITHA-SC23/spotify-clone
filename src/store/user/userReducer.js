const initialState = {
    userData : [],
    loading : false,
    error : null,
}

const userData = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CURRENT_USER_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_CURRENT_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                userData: action.payload,
            };
        case "FETCH_CURRENT_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userData;