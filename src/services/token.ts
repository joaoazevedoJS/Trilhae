const Token = '@Trilhae:auth';

export const getToken = () => localStorage.getItem(Token);
export const setToken = (value: string) => localStorage.setItem(Token, value);
export const deleteToken = () => localStorage.removeItem(Token);
