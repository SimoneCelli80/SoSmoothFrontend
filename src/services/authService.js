import { handleErrors } from "../utils/apiUtils";

export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await handleErrors(response);
        return data;
    } catch (error) { 
        throw error;
    }
}

/*export const loginUser = async (loginData) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/loginUser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(loginData)
        });
        const data = await response.json();
        if(!response.ok) {
            const error = new ValidationError(data.error || "Login failed.", data.status, data.errors);
            throw error;
        }
        return data;
    } catch (error) {
        throw error;
    }
}*/

export const logoutUser = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/logout', {
            method: "POST",
            credentials: "include", 
        });
        if (!response.ok) {
            throw new Error('Logout failed');
        }
        return;
    } catch (error) {
        throw error;
    }
}

export const refreshAccessToken = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/refresh-token', {
            method: "POST",
            credentials: "include", 
        });
        const data = await handleErrors(response);
        return data;
    } catch (error) {
        throw error;
    }
}