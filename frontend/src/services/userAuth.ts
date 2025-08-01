const ACCESS_TOKEN_KEY = 'accessToken';

const setAccessToken = (accessToken: string): void => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const removeAccessToken = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const userAuth = {
    setAccessToken,
    getAccessToken,
    removeAccessToken
};