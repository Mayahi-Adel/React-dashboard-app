import { createContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({children}) => {

    const tokenStorage = localStorage.getItem('token');
    const [isAuth, setIsAuth] = useState((tokenStorage) ? true : false);
    const [token, setToken] = useState((tokenStorage) ? tokenStorage : null);
    return (
        <authContext.Provider value={{isAuth, setIsAuth, token, setToken}}>
            {children}
        </authContext.Provider>
    )
}

export {AuthProvider};
export default authContext;