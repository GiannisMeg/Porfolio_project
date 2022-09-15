import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { loginSuccess, logOut, tokenStillValid, newComment } from "./slice";
// import { newComment } from "../cocktails/slice";

export const signUp = (name, email, password) => {
	return async (dispatch, getState) => {
		dispatch(appLoading());
		try {
			const response = await axios.post(`${apiUrl}/auth/signup`, {
				name,
				email,
				password,
			});

			dispatch(
				loginSuccess({
					token: response.data.token,
					user: response.data.user,
				})
			);
			dispatch(showMessageWithTimeout("success", true, "account created"));
			dispatch(appDoneLoading());
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message);
				dispatch(
					setMessage({
						variant: "danger",
						dismissable: true,
						text: error.response.data.message,
					})
				);
			} else {
				console.log(error.message);
				dispatch(
					setMessage({
						variant: "danger",
						dismissable: true,
						text: error.message,
					})
				);
			}
			dispatch(appDoneLoading());
		}
	};
};

export const login = (email, password) => {
	return async (dispatch, getState) => {
		dispatch(appLoading());
		try {
			const response = await axios.post(`${apiUrl}/auth/login`, {
				email,
				password,
			});

			dispatch(
				loginSuccess({
					token: response.data.token,
					user: response.data.user,
				})
			);
			dispatch(
				showMessageWithTimeout("success", false, "welcome back!", 1500)
			);
			dispatch(appDoneLoading());
		} catch (error) {
			if (error.response) {
				console.log(error.response.data.message);
				dispatch(
					setMessage({
						variant: "danger",
						dismissable: true,
						text: error.response.data.message,
					})
				);
			} else {
				console.log(error.message);
				dispatch(
					setMessage({
						variant: "danger",
						dismissable: true,
						text: error.response.data.message,
					})
				);
			}
			dispatch(appDoneLoading());
		}
	};
};

export const getUserWithStoredToken = () => {
	return async (dispatch, getState) => {
		// get token from the state
		const token = selectToken(getState());

		// if we have no token, stop
		if (token === null) return;

		dispatch(appLoading());
		try {
			// if we do have a token,
			// check wether it is still valid or if it is expired
			const response = await axios.get(`${apiUrl}/auth/me`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			// token is still valid
			dispatch(tokenStillValid({ user: response.data }));
			dispatch(appDoneLoading());
		} catch (error) {
			if (error.response) {
				console.log(error.response.message);
			} else {
				console.log(error);
			}
			// if we get a 4xx or 5xx response,
			// get rid of the token by logging out
			dispatch(logOut());
			dispatch(appDoneLoading());
		}
	};
};

//create comment

export const postComment = (name, text) => async (dispatch, getState) => {
	// prop comment is from useState and contains name and text
	const token = getState().user.token;
	try {
		const response = await axios.post(
			`http://localhost:4000/users/create`,
			{ name, text },
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		console.log(response.data, "response successful added comment");

		dispatch(
			showMessageWithTimeout("success", false, response.data.message, 2000)
		);
		// update state with recieved data of created comment
		// dispatch(newComment({ userId, comment: response.data }));
		dispatch(newComment(response.data));
	} catch (err) {
		console.log(err.message);
	}
};

// favorite add/remove

export const favoriteCocktail = (cocktailId) => async (dispatch, getState) => {
	const token = getState().user.token;

	try {
		// we get the id [x]
		// console.log("cocktail", cocktailId);
		const response = await axios.post(
			`http://localhost:4000/users/favorites`,
			{ cocktailId },
			{ headers: { Authorization: `Bearer ${token}` } }
		);

		console.log("response added to favorites", response.data);

		dispatch(
			showMessageWithTimeout("success", false, response.data.message, 2000)
		);

		dispatch(getUserWithStoredToken());
	} catch (err) {
		console.log(err.message);
	}
};
