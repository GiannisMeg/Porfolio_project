import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import {
	Homepage,
	DetailsPage,
	Login,
	SignUp,
	FindCocktailsPage,
	MyCocktails,
} from "./pages";
import { selectAppLoading } from "./store/appState/selectors";
import Loading from "./components/Loading";

function App() {
	const dispatch = useDispatch();
	const appLoading = useSelector(selectAppLoading);

	useEffect(() => {
		dispatch(getUserWithStoredToken());
	}, [dispatch]);

	return (
		<div>
			<Navigation />
			<MessageBox />
			{appLoading ? <Loading /> : null}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/cocktails/:id" element={<DetailsPage />} />
				<Route path="/cocktails/findone" element={<FindCocktailsPage />} />
				<Route path="/mycocktails" element={<MyCocktails />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
