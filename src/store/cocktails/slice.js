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

// toggle favorite pizza example with a hardcoded array

// toggleFavorites: (state, action) => {
// 			const id = action.payload;
//
// 			const newFavArray = state.favorites.includes(id)
// 				? // filter out if  array includes toggled id
// 				  // so if i want to keep  one id  that are not equal to the reset we filter out -> we filter 2 out of 1,2,3
// 				  state.favorites.filter((pizzaId) => pizzaId !== id) // if it is not equal => remove it
// 				: [...state.favorites, id];
// 			console.log("new array", newFavArray);
// 			// if we copy first the existing array of our user and we add the new pizza Id so now we have 4 pizzas in our array

// 			// add it to state
// 			state.favorites = newFavArray;
// 		},
