import {
	getAllCocktails,
	getOneCocktail,
	newReview,
	newCocktail,
	getAllComments,
} from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
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

//get all comments

export const showAllComments = () => async (dispatch, getState) => {
	try {
		const response = await axios.get("http://localhost:4000/users/comments");
		// console.log("response comment", response);
		dispatch(getAllComments(response.data));
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

// create Review
export const postReview =
	(text, rating, cocktailId) => async (dispatch, getState) => {
		// prop comment is from useState and contains name and text
		const token = getState().user.token;
		try {
			const response = await axios.post(
				`http://localhost:4000/cocktails/create/review/${cocktailId}`,
				{ text, rating },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			console.log(response.data, "response successful added comment");

			dispatch(
				showMessageWithTimeout(
					"success",
					false,
					response.data.message,
					2000
				)
			);
			// update state with recieved data of created comment
			// dispatch(newComment({ userId, comment: response.data }));
			dispatch(newReview(response.data));
		} catch (err) {
			console.log(err.message);
		}
	};
