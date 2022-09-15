import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [],
	cocktailDetails: {},
	review: [],
};

export const cocktailStateSlice = createSlice({
	name: "cocktail",
	initialState,
	reducers: {
		getAllCocktails: (state, action) => {
			const newCocktailsArray = action.payload;

			state.cocktails = newCocktailsArray;
		},
		newCocktail: (state, action) => {
			state.cocktails.push(action.payload);
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
	},
});

export const {
	getAllCocktails,
	getOneCocktail,
	newReview,
	newCocktail,

	getAllReviews,
} = cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
