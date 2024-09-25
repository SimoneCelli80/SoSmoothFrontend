import { ValidationError } from './ValidationError';

export const handleErrors = async (response) => {
    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    } else {
        data = await response.text();
    }
    if (!response.ok) {
        throw new ValidationError(data.error || "Request failed.", data.status, data.errors);
    }
    return data;
}