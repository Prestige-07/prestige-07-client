export const selectAuth = state => {
  const { isLoggedIn, token } = state.auth;
  return { isLoggedIn, token };
};

export const selectIsAuthLoading = state => state.auth.isLoading;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectError = state => state.auth.error;

export const selectToken = state => state.auth.token;

export const selectAdministrators = state => state.auth.administrators;
