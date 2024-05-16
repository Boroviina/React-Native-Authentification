import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const authContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {
    },
    logout: () => {
    }
});

function AuthContextProvider({children}) {

    const [authTocen, setAuthToken] = useState();


    function authnenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authTocen,
        isAuthenticated: !!authTocen,
        authenticate: authnenticate,
        logout: logout
    }
    return <AuthContextProvider value={value}>{children}</AuthContextProvider>;

}

export default AuthContextProvider;