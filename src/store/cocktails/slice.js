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
			const incomingId = action.payload;
			state.cocktails = incomingId;
		},
	},
});

export const { getAllCocktails, getOneCocktail } = cocktailStateSlice.actions;

export default cocktailStateSlice.reducer;
