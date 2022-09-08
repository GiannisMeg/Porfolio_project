import { getAllCocktails, getOneCocktail } from "./slice";
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
