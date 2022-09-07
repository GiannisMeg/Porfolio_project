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
//thunks
import { showAllCocktails, postComment } from "../store/cocktails/thunks";
// import { Button } from "@mui/material";

//[Todo]
// 			:Submit a comment
//			: comments have to appear after login and refresh page

export const Homepage = () => {
	const dispatch = useDispatch();
	const allCocktails = useSelector(selectAllCocktails);

	//states

	// const [comment, setComment] = useState("");
	// const [commentId, setCommentId] = useState(0);
	// const [name, setName] = useState("");
	// const [text, setText] = useState("");

	// submit comments
	// const submitComment = (e, id) => {
	// 	e.preventDefault();

	// 	//comment form
	// 	// const comment = {
	// 	// 	name: name,
	// 	// 	text: text,
	// 	// 	id: commentId,
	// 	// };

	// 	dispatch(postComment(id, comment));

	// 	setComment("");
	// };

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
		<Container
			style={{
				background: "yellow",
			}}
		>
			<Carousel slides={slides} autoplay={false} interval={1000} />
			<RandomCocktail />
		</Container>
	);
};

const Container = styled.div`
	margin: 20px;
`;

// 	<form className="comment-form" onSubmit={submitComment}>
// 	<label>Name</label>
// 	<input
// 		type="text"
// 		value={name}
// 		onChange={(e) => setName(e.target.value)}
// 	/>
// </form>
// <form className="form">
// 	<label>Text</label>
// 	<input
// 		type="text"
// 		value={text}
// 		onChange={(e) => setText(e.target.value)}
// 	/>
// </form>
// <div className="comment-box">
// 	<h2>Comments</h2>
// 	{comments.map((comm) => (
// 		<div key={comm.id}>
// 			<h3>{comm.name}</h3>
// 			<p>{comm.text}</p>
// 		</div>
// 	))}
// </div>
