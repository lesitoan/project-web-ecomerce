import { createContext, useReducer } from 'react';
import AuthReducer from './authReducer';

const INITIAL_STATE = {
    user: null
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    console.log('state:', state)
    return (
        <AuthContext.Provider
            value={{ user: state.user, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthContextProvider
}