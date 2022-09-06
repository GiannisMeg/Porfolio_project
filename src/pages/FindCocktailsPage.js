import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSingleCocktail } from "../store/cocktails/thunks";

export const FindCocktailsPage = () => {
	const dispatch = useDispatch();
	// useRef hook return a mutable obj with .current property
	const searchValue = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
	};

	// create and render a cocktail card
	const cocktailCard = () => {
		// Display something like this
		// <div className="main-card">
		// 		<h3 className="main-title"></h3>
		// 		<p className="main-ingredient">Ingredients :
		// 			{cocktail.strIngredient1},{cocktail.strIngredient2},
		// 			{cocktail.strIngredient3}
		// 		</p>
		// 	</div>;
	};

	const handleChange = () => {
		// use useRef hook to track the searchTerm like e.target.value
		const searchText = searchValue.current.value;
		// calling the searchTerm inside the thunk who is getting the cocktails
		dispatch(fetchSingleCocktail({ searchText }));
	};

	return (
		<Container>
			<h3>FindCocktail</h3>
			<from onSubmit={submitHandler}>
				<div className="search-container">
					<input
						type="text"
						className="search-field"
						placeholder="cocktails"
						// ref is related to useRef hook
						ref={searchValue}
						onChange={handleChange}
					/>
				</div>
			</from>
		</Container>
	);
};

const Container = styled.div`
	margin: 20px;
`;
