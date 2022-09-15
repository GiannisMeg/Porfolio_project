export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;
export const selectAllUsersWithComments = (state) =>
	state.user.profile?.comment;

// selectuserfavorites

export const isUserFavorite = (cocktailId) => (state) =>
	state.user?.profile?.userFavorites?.some((f) => f.id === cocktailId); //returns true || false

// some() method tests whether at list one element in the array passes the test implemented by the provided function

export const selectAllComments = (state) => state.user.allComments;
