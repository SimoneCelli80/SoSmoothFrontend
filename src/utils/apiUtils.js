import { ValidationError } from './ValidationError';

export const handleErrors = async (response) => {
    const data = await response.json();
    if (!response.ok) {
        throw new ValidationError(data.error || "Request failed.", data.status, data.errors);
    }
    return data;
}