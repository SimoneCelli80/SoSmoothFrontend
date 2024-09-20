export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (!response.ok) {
            const error = new ValidationError(data.error || "Registration failed.", data.status, data.errors);    
            throw error;
        }
        return data;
    } catch (error) { 
        throw error;
    }
}

class ValidationError extends Error {
    constructor(message, status, errors) {
        super(message);
        this.name = 'ValidationError';
        this.status = status;
        this.errors = errors;
    }
}