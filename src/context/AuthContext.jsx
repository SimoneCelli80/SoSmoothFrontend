import { createContext, useState, useEffect, useCallback } from 'react';
import { refreshAccessToken, logoutUser } from '../services/authService';
import { handleErrors } from '../utils/apiUtils';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        accessToken: null
    });


    const login = async(email, password) => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            });
            const data = await handleErrors(response);
            console.log("Login response", data.userName, data.accessToken);
            setAuthState({
                isAuthenticated: true,
                user: data.userName,
                accessToken: data.accessToken
            });
            console.log("Authstate dopo il set", authState);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        console.log('Auth state changed:', authState);  // Verifica il nuovo stato dopo che viene aggiornato
    }, [authState]);

    const logout = async () => {
        try {
            await logoutUser();
            setAuthState({
                isAuthenticated: false,
                user: null,
                accessToken: null
            });
        } catch (error) {
            console.error('An error occured during the logout: ', error);
        }
    };

    const refreshToken = async () => {
        try {
            const data = await refreshAccessToken();
            setAuthState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                accessToken: data.accessToken,
                user: data.user
            }));
            return data.accessToken;
        } catch (error) {
            await logout();
            throw error;
        }
    };

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                await refreshToken();
            } catch (error) {
                console.log('User not authanticated.');
            }
        };
        initializeAuth();
    }, []);

    /*const fetchWithAuth = useCallback(async (url, options = {}) => {
        const headers = {
            ...options.headers,
            'Content-Type': 'application/json',
            ...(authState.accessToken ? { 'Authorization': `Bearer ${authState.accessToken}` } : {}),
        };
        const fetchOptions = {
            ...options,
            headers,
            credentials: 'include', 
        };
        let response = await fetch(url, fetchOptions);
        if (response.status === 401) {
            try {
                const newAccessToken = await refreshToken();
                const newHeaders = {
                    ...options.headers,
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${newAccessToken}`,
                };

                const newFetchOptions = {
                    ...options,
                    headers: newHeaders,
                    credentials: 'include',
                };
                response = await fetch(url, newFetchOptions);
            } catch (error) {
                await logout();
                throw error;
            }
        }
        return response;
    }, [authState.accessToken, refreshToken, logout]);*/

    return (
        <AuthContext.Provider value={{ authState, login, logout/*, fetchWithAuth*/ }}>
            {children}
        </AuthContext.Provider>
    );
};