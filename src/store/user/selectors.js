export const selectToken = (state) => state.user.token;
export const selectUser = (state) => state.user.profile;
export const selectAllUsersWithComments = (state) =>
	state.user.profile?.comment;
