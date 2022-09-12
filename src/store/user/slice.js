import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: localStorage.getItem("token"),
	profile: null,
	comment: {},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.profile = action.payload.user;
		},
		logOut: (state, action) => {
			localStorage.removeItem("token");
			state.token = null;
			state.profile = null;
		},
		tokenStillValid: (state, action) => {
			state.profile = action.payload.user;
		},
		getAllUsersWithComments: (state, action) => {
			const newArrayUsersWithComments = action.payload;

			state.profile.comment = newArrayUsersWithComments;
		},
		newComment: (state, action) => {
			state.profile = action.payload;
		},
		newReview: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const {
	loginSuccess,
	logOut,
	tokenStillValid,
	getAllUsersWithComments,
	newComment,
	newReview,
} = userSlice.actions;

export default userSlice.reducer;
