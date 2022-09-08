//css
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { RandomCocktail } from "../components";

//files
// import CocktailCarousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//selectors
import { selectAllCocktails } from "../store/cocktails/selectors";
import { selectUser } from "../store/user/selectors";
//thunks
import { showAllCocktails, postComment } from "../store/cocktails/thunks";

import Comments from "../components/Comments";

//[Todo]
// 			: add darkMode

export const Homepage = () => {
	const dispatch = useDispatch();
	const allCocktails = useSelector(selectAllCocktails);

	// carousel of all cocktails
	let slides = allCocktails.map((tails) => (
		<div key={tails.id}>
			<Link to={`/cocktails/${tails.id}`}>
				<img
					src={tails.imageUrl}
					alt=""
					style={{ width: "350px", height: "350px", maxWidth: "100%" }}
				/>
			</Link>
		</div>
	));

	useEffect(() => {
		// call function -> onclick render again
		// get all cocktails from db
		dispatch(showAllCocktails());
	}, [dispatch]);

	console.log(" home cocktails", allCocktails);
	return (
		<>
			<Container
				style={{
					background: "yellow",
				}}
			>
				<Carousel slides={slides} autoplay={false} interval={1000} />
				<RandomCocktail />
			</Container>

			<Comments />
		</>
	);
};

const Container = styled.div`
	margin: 20px;
`;
