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
		getOneCocktail: (state, action) => {
			const incomingData = action.payload;

			state.cocktailDetails = incomingData;
		},
		newComment: (state, action) => {
			state.cocktails = action.payload;
		},
	},
});

export const { getAllCocktails, getOneCocktail, newComment } =
	cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
