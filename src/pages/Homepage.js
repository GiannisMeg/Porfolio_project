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
import {
	selectUser,
	selectAllUsersWithComments,
} from "../store/user/selectors";
//thunks
import { showAllCocktails } from "../store/cocktails/thunks";
import { showAllComments, postComment } from "../store/user/thunks";

import Comments from "../components/Comments";

//[Todo]
// 			: add darkMode
// -- debug comments - get and post
// -- add favorite funtionality in details page
// -- review modal modify

export const Homepage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const userWithComments = useSelector(selectAllUsersWithComments);
	const filteredUserWithComments = userWithComments?.map(
		(user) => user.comments
	);
	// flat(); for nested arrays so that you get an list of lists
	const newCommentList = filteredUserWithComments?.flat();
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

	console.log(" users ", newCommentList);

	return (
		<>
			<Container
				style={{
					background: "yellow",
				}}
			>
				<Carousel slides={slides} autoplay={false} interval={1000} />
				<RandomCocktail />
				<div
					style={{ backgroundColor: "gray" }}
					className="comment-section"
				>
					<h1>HELLOOOOOO</h1>
					<ul>
						{newCommentList?.map((name) => {
							return (
								<li>
									<h3>{name.name}</h3>
									<p>{name.text}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</Container>
			<Comments />
		</>
	);
};

const Container = styled.div`
	margin: 20px;
`;
