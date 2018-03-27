export const authenticateUser = (authData) => {
  localStorage.setItem('token', authData.token);
  localStorage.setItem('userId', authData.userId);
}

export const isUserAuthenticated = () => {
  return localStorage.getItem('token') !== null;
}

export const deauthenticateUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
}

export const getToken = () => {
  return localStorage.getItem('token');
}

export const getUserId = () => {
  return localStorage.getItem('userId');
}

export const getAuthHeader = () => {
  const token = getToken();
  return token ? `Bearer ${token}` : ""
}