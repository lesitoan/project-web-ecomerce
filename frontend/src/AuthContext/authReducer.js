const AuthReducer = (state, action) => {
    console.log(action.type === "LOGIN_SUCCESS")
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
            };
        case "LOGIN_FAIL":
            return {
                user: null,
            };
        case "LOGOUT":
            return {
                user: null,
            };
        default:
            return { ...state };
    }
};

export default AuthReducer;