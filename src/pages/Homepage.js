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
import {
	selectAllCocktails,
	selectAllComments,
} from "../store/cocktails/selectors";
import { selectUser } from "../store/user/selectors";
//thunks
import { showAllCocktails, showAllComments } from "../store/cocktails/thunks";

import Comments from "../components/Comments";

//[Todo]
// 			: add darkMode
// -- debug comments - get and post
// -- add favorite funtionality in details page
// -- review modal modify

export const Homepage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const allComments = useSelector(selectAllComments);
	// flat(); for nested arrays so that you get an list of lists
	// const arrayOfComments = filteredUserWithComments.map((arr) => arr.Array);
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
		dispatch(showAllComments());
	}, [dispatch]);

	// console.log(" home cocktails", allCocktails);

	// console.log(" users ", newCommentList);

	return (
		<>
			<Container
				style={{
					background: "yellow",
				}}
			>
				<Carousel slides={slides} autoplay={false} interval={1000} />
				<RandomCocktail />
				{user || !user ? (
					<div
						style={{ backgroundColor: "gray" }}
						className="comment-section"
					>
						<ul>
							{allComments?.map((comm) => {
								return (
									<li key={comm.id}>
										<h3>{comm.name}</h3>
										<p>{comm.text}</p>
										<h3>{comm.user.name}</h3>
									</li>
								);
							})}
						</ul>
					</div>
				) : (
					" "
				)}
			</Container>
			<Comments />
		</>
	);
};

const Container = styled.div`
	margin: 20px;
`;
