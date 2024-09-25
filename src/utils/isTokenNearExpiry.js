import { jwtDecode } from 'jwt-decode';

const isTokenNearExpiry = (token) => {
    const { exp } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return exp - currentTime < 60; // Fai il refresh se il token scade entro 60 secondi
};

export default isTokenNearExpiry;
