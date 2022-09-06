import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import cocktailStateReducer from "./cocktails/slice";

export default configureStore({
	reducer: {
		appState: appStateReducer,
		user: userReducer,
		cocktail: cocktailStateReducer,
	},
});
