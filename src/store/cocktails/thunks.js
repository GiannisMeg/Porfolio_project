import { getAllCocktails, getOneCocktail, newComment } from "./slice";
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

//create comment

export const postComment = (userId, comment) => async (dispatch, getState) => {
	// prop comment is from useState and contains name and text
	try {
		const response = await axios.post(
			`http://localhost:4000/cocktails/comment/${userId}`,
			{ comment }
		);
		console.log(response, "response");

		dispatch(
			showMessageWithTimeout("success", false, response.data.message, 2000)
		);
		// update state with recieved data of created comment
		dispatch(newComment({ userId, comment: response.data }));
	} catch (err) {
		console.log(err.message);
	}
};
