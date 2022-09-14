//css
import styled from "styled-components";
import { Carousel } from "3d-react-carousal";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import { RandomCocktail } from "../components";
import "./Homepage.css";

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

export const Homepage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const allComments = useSelector(selectAllComments);
	const allCocktails = useSelector(selectAllCocktails);

	// carousel of all cocktails
	let slides = allCocktails.map((tails) => (
		<div key={tails.id}>
			<Link
				style={{
					display: "flex",
					flexDirection: "column",
					borderRadius: "10px",
					paddingTop: "40px 0",
					textDecoration: "none",
				}}
				to={`/cocktails/${tails.id}`}
			>
				<img
					text="Learn More"
					src={tails.imageUrl}
					alt=""
					style={{
						maxWidth: "350px",
						maxHeight: "350px",
						borderRadius: "10px 10px 0 0",
					}}
				/>
				<button
					style={{
						borderRadius: "0 0 10px 10px",
						padding: "15px",
						color: "#fff",
						fontSize: "20px",
						background: "#222",
						fontWeight: "700",
					}}
					href={`/cocktails/${tails.id}`}
				>
					{" "}
					LEARN MORE
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
		<div className="body">
			<div style={{ marginTop: "50px" }} className="c-homepage-carousel">
				<Carousel slides={slides} autoplay={false} interval={1000} />
			</div>
			<div style={{ background: "" }} className="random_cocktails">
				<RandomCocktail />
			</div>
			<div>
				<Comments />
				<div className="comment_list">
					{user || !user ? (
						<div style={{}} className="comment-section">
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
			{/* <div style={{ display: "flex" }}>
				<div
					style={{ background: "lightgreen" }}
					className="random_cocktails"
				>
					<RandomCocktail />
				</div>
				<div>
					<Comments />
					<div className="comment_list">
						{user || !user ? (
							<div
								style={{
									backgroundColor: "lightgray",
									border: "solid 1px",
								}}
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
			</div> */}
		</div>
	);
};
