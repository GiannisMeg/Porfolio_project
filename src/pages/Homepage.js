//css
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { RandomCocktail } from "../components";

//files
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//selectors
import {
	selectAllCocktails,
	selectAllComments,
} from "../store/cocktails/selectors";
import { selectUser } from "../store/user/selectors";
//thunks
import { showAllCocktails, showAllComments } from "../store/cocktails/thunks";

import Comments from "../components/Comments";

export const Homepage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const allComments = useSelector(selectAllComments);
	const allCocktails = useSelector(selectAllCocktails);

	// carousel of all cocktails
	let slides = allCocktails.map((tails) => (
		<div key={tails.id}>
			<Link to={`/cocktails/${tails.id}`}>
				<img
					text="Learn More"
					src={tails.imageUrl}
					alt=""
					style={{ width: "350px", height: "350px", maxWidth: "100%" }}
				/>
				<button href={`/cocktails/${tails.id}`}>
					{" "}
					About this Cocktail
				</button>
			</Link>
		</div>
	));

	useEffect(() => {
		// call function -> onclick render again
		// get all cocktails from db
		dispatch(showAllCocktails());
		dispatch(showAllComments());
	}, [dispatch]);

	// console.log(" users ", newCommentList);

	return (
		<div style={{ background: "#222" }}>
			<div
				style={{
					background: "yellow",
				}}
			>
				<Carousel slides={slides} autoplay={false} interval={1000} />
			</div>
			<div style={{ background: "lightgreen" }} className="random_cocktails">
				<RandomCocktail />
			</div>
			<div>
				<Comments />
				<div className="comment_list">
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
				</div>
			</div>

			<div class="parallelogram" id="one"></div>
			<div class="parallelogram" id="two"></div>
			<div class="parallelogram" id="three"></div>
			<div class="parallelogram" id="four"></div>
			<div class="parallelogram" id="five"></div>
			<div class="parallelogram" id="six"></div>

			<h1>Welcome</h1>
		</div>
	);
};
