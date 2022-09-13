import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [],
	cocktailDetails: {},
	favorite: [],
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
		getAllComments: (state, action) => {
			const newArrayUsersWithComments = action.payload;

			state.allComments = newArrayUsersWithComments;
		},
		getOneCocktail: (state, action) => {
			const incomingData = action.payload;

			state.cocktailDetails = incomingData;
		},
		newReview: (state, action) => {
			state.review = action.payload;
		},
	},
});

export const {
	getAllCocktails,
	getOneCocktail,
	newReview,
	newCocktail,
	getAllComments,
} = cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
