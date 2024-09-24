 export class ValidationError extends Error {
    constructor(message, status, errors) {
        super(message);
        this.name = 'ValidationError';
        this.status = status;
        this.errors = errors;
    }
}