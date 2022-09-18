//css
import { Carousel } from "3d-react-carousal";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import { RandomCocktail } from "../components";

//files
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//selectors
import {
	selectAllCocktails,
	// selectAllComments,
} from "../store/cocktails/selectors";
import { selectUser, selectAllComments } from "../store/user/selectors";

//thunks
import { showAllCocktails } from "../store/cocktails/thunks";
import { showAllComments } from "../store/user/thunks";
import FotosList from "../components/FotosList";

import TwitCard1 from "../components/TwitCard3";
import TwitCard2 from "../components/TwitCard2";
import TwitCard3 from "../components/TwitCard3";

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
		<div className="home-container">
			<div style={{ marginTop: "50px" }} className="c-homepage-carousel">
				<Carousel slides={slides} autoplay={false} interval={1000} />
			</div>
			<div
				className="middle-bar"
				style={{
					background: "#222",
					marginTop: "40px",
					marginLeft: "18%",
					border: "solid 1px #fff",
					borderRadius: "450%",
					fontSize: "3px",
					width: "66%",
				}}
			>
				<span>-</span>
			</div>
			<div className="mdl-section" style={{ display: "flex" }}>
				<div
					className="random_cocktails"
					style={{
						flex: "3",
					}}
				>
					<RandomCocktail />
				</div>
				<div
					className="comment_list"
					style={{
						listStyleType: "none",
						padding: "20px",
						display: "flex",
						flex: "1",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						borderRadius: "10px",
					}}
				>
					{user || !user ? (
						<div className="comment-section">
							<details>
								<summary
									style={{
										border: "solid 2px #222",
										borderRadius: "5px",
										padding: "5px",
										textAlign: "center",
										width: "300px",
										position: "relative",
										left: "60px",
									}}
								>
									{" "}
									Show comments{" "}
								</summary>{" "}
								<ul>
									{allComments?.map((comm) => {
										return (
											<li
												key={comm.id}
												style={{
													display: "flex",
													flexDirection: "column",
													width: "100%",
													justifyContent: "space-between",
													border: "2px solid  #ed5e7a ",
													borderRadius: "10px",
													margin: 5,
													padding: 4,
													background: "#ffe0db",
													boxShadow: "2px 2px  hsl(0, 5%, 94%)",
												}}
											>
												<h4
													style={{
														display: "flex",
													}}
												>
													{comm.name}
												</h4>
												<p style={{ fontSize: "small" }}>
													{comm.text}
												</p>
											</li>
										);
									})}
								</ul>
							</details>
						</div>
					) : (
						" "
					)}
					<Comments />
				</div>
			</div>

			<div
				className="btm-section"
				style={{
					display: "flex",
					background: "#FFDEEA",
				}}
			>
				<div
					className="imp-fotoslist"
					style={{
						display: "flex",
						flex: "1",
						position: "relative",
						left: "2%",
					}}
				>
					<FotosList />
				</div>
				<div
					className="imp-fotoslist1"
					style={{
						display: "flex",
						// background: "#999",
						flex: "1",

						position: "relative",
					}}
				>
					<div
						className="twit-crd-sct"
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<h2
							style={{
								marginTop: "20px",
								marginLeft: "25%",
							}}
						>
							{" "}
							Here's to over 100 million glasses raised.
						</h2>
						<p
							style={{
								marginTop: "20px",
								marginLeft: "25%",
							}}
						>
							{" "}
							This is a fancy number that marketing wanted to use to show
							that we've delivered drinks to a lot of people.
						</p>
						<div
							className="cards"
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-around",
								marginTop: "50px",
							}}
						>
							<TwitCard1 />

							<TwitCard2 />

							<TwitCard3 />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
