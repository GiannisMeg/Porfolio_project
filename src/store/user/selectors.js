export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;
export const selectAllUsersWithComments = (state) =>
	state.user.profile?.comment;

export const selectUserCocktails = (state) => state.user.profile?.cocktails;

export const isUserFavorite = (cocktailId) => (state) =>
	state.user?.profile?.userFavorites?.some((f) => f.id === cocktailId); //returns true || false

export const userFavorites = (state) => state.user?.profile?.userFavorites;

// some() method tests whether at list one element in the array passes the test implemented by the provided function

export const selectAllComments = (state) => state.user.allComments;
