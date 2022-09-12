import {
	getAllCocktails,
	getOneCocktail,
	addedReview,
	newCocktail,
} from "./slice";
// import { showMessageWithTimeout } from "../appState/thunks";
const axios = require("axios");

// get all
export const showAllCocktails = () => async (dispatch, getState) => {
	try {
		const response = await axios.get("http://localhost:4000/cocktails");

		dispatch(getAllCocktails(response.data));
	} catch (err) {
		console.log(err.message);
	}
};

//get by id
export const showSpecificCocktail = (id) => async (dispatch, getState) => {
	try {
		const response = await axios.get(`http://localhost:4000/cocktails/${id}`);
		console.log(response.data, "response");

		dispatch(getOneCocktail(response.data));
	} catch (err) {
		console.log(err.message);
	}
};

// create cocktail

export const addNewCocktail =
	(name, glass, instructions, ingredients) => async (dispatch, getState) => {
		const token = getState().user.token;

		try {
			const response = await axios.post(
				`http://localhost:4000/cocktails/create/`,
				{ name, glass, instructions, ingredients },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			console.log(response.data, "response successful added cocktail");
			dispatch(newCocktail(response.data));
		} catch (err) {
			console.log(err.message);
		}
	};

// create review

export const addReview =
	(reviewObj, cocktailId) => async (dispatch, getState) => {
		const token = getState().user.token;
		// console.log(getState().user);
		try {
			//make a post request to the server with the story object
			const response = await axios.post(
				`http://localhost:4000/cocktails/create/${cocktailId}`,
				reviewObj,
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			console.log(
				"Thunk returning successfully review added",
				response.data
			);

			// We get back Listing data from the new Offer inc.headers
			const listingResponse = await axios.get(
				`http://localhost:4000/cocktails/${cocktailId}`
			);
			console.log(listingResponse.data);
			//upadate state in client side
			dispatch(addedReview(response.data));
		} catch (e) {
			console.log(e.message);
		}
	};
