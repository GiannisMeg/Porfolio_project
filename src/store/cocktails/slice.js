import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [],
	cocktailDetails: {},
	allComments: [],
	review: [],
};

export const cocktailStateSlice = createSlice({
	name: "cocktails",
	initialState,
	reducers: {
		getAllCocktails: (state, action) => {
			const newCocktailsArray = action.payload;

			state.cocktails = newCocktailsArray;
		},
		newCocktail: (state, action) => {
			state.cocktails = action.payload;
		},
		getOneCocktail: (state, action) => {
			const incomingData = action.payload;

			state.cocktailDetails = incomingData;
		},
		getAllComments: (state, action) => {
			const newArrayUsersWithComments = action.payload;

			state.allComments = newArrayUsersWithComments;
		},
		getAllReviews: (state, action) => {
			const newArrayAllReviews = action.payload;

			state.review = newArrayAllReviews;
		},
		newReview: (state, action) => {
			state.review.push(action.payload);
		},
		// newComment: (state, action) => {
		// 	// state.profile = action.payload;
		// 	state.allComments.push(action.payload);
		// },
	},
});

export const {
	getAllCocktails,
	getOneCocktail,
	newReview,
	newCocktail,
	getAllComments,
	getAllReviews,
	// newComment,
} = cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
