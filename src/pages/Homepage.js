//css
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import { Image, NavLink } from "react-bootstrap";

//files
// import CocktailCarousel from "../components/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//selectors
import { selectAllCocktails } from "../store/cocktails/selectors";
//thunks
import { showAllCocktails } from "../store/cocktails/thunks";
import { Button } from "@mui/material";

//[Todo]
// while i submit a comment i want to create one in the database an manage state with redux
// make details page

// apiUrl
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const Homepage = () => {
	const dispatch = useDispatch();
	const allCocktails = useSelector(selectAllCocktails);

	//states
	const [randomCocktail, setRandomCocktail] = useState([]);
	// const [comments, setComments] = useState([]);
	// const [commentId, setCommentId] = useState(0);
	// const [name, setName] = useState("");
	// const [text, setText] = useState("");

	//submit comments
	// const submitComment = (e) => {
	// 	e.preventDefault();

	// 	//comment form
	// 	const comment = {
	// 		name: name,
	// 		text: text,
	// 		id: commentId,
	// 	};

	// 	setCommentId(commentId + 1);
	// 	setComments([...comments, comment]);
	// };

	// carousel of all cocktails
	let slides = allCocktails?.map((tails) => (
		<div key={tails.id}>
			<NavLink to={`/cocktails/${tails.id}`}>
				<img
					src={tails.imageUrl}
					alt=""
					style={{ width: "350px", height: "350px", maxWidth: "100%" }}
				/>
			</NavLink>
		</div>
	));

	// random cocktail fetch from api dont declare it inside useEffect cant run inside button
	const fetchApiCocktails = async () => {
		const response = await fetch(url);
		const data = await response.json();
		//set incoming value
		setRandomCocktail(data.drinks);
		console.log("cocktails fetched", data.drinks);
	};

	useEffect(() => {
		// call function -> onclick render again
		fetchApiCocktails();

		// get all cocktails from db
		dispatch(showAllCocktails());
	}, [dispatch]);

	// console.log(" home cocktails", randomCocktail);
	return (
		<Container
			style={{
				background: "yellow",
			}}
		>
			<Carousel slides={slides} autoplay={false} interval={1000} />

			<section className="random-cocktail">
				{randomCocktail.map((cocktail) => {
					// destructure needed apiNames
					const {
						idDrink,
						strDrink,
						strCategory,
						strDrinkThumb,
						strInstructions,
					} = cocktail;
					// display cocktail
					return (
						<article
							style={{
								display: "flex",
								backgroundColor: "pink",
							}}
							key={idDrink}
						>
							<div className="rdm-cocktail-n_i_c">
								<h3>{strDrink}</h3>
								<h5>{strCategory}</h5>
								<img
									src={strDrinkThumb}
									alt=""
									style={{
										borderRadius: "5px",
										width: "350px",
										height: "350px",
										maxWidth: "100%",
									}}
								/>
							</div>
							<div
								style={{
									background: "lightblue",
									paddingTop: "30px",
								}}
								className="rdm-cocktail-instr"
							>
								<p>
									Follow instructions : <br /> {strInstructions}
								</p>
							</div>
						</article>
					);
				})}
				<Button variant="outlined" onClick={() => fetchApiCocktails()}>
					Random
				</Button>
			</section>
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
