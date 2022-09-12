import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: [],
	cocktailDetails: {},
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
		addedReview: (state, action) => {
			state.cocktailDetails = action.payload;
		},
	},
});

export const { getAllCocktails, getOneCocktail, addedReview, newCocktail } =
	cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
