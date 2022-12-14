import TwitCard1 from "../components/TwitCard1 ";
import TwitCard2 from "../components/TwitCard2";
import TwitCard3 from "../components/TwitCard3";
import StepCard1 from "../components/StepsCard";
import StepCard2 from "../components/StepsCard2";
import StepCard3 from "../components/StepCard3";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//selectors
import { selectAllCocktails } from "../store/cocktails/selectors";
import { selectUser, selectAllComments } from "../store/user/selectors";

//thunks
import { showAllCocktails } from "../store/cocktails/thunks";
import { showAllComments } from "../store/user/thunks";
import FotosList from "../components/FotosList";

//css
import { Carousel } from "3d-react-carousal";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import { RandomCocktail } from "../components";
import CommentIcon from "@mui/icons-material/Comment";

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
			<div style={{ marginTop: "200px" }} className="c-homepage-carousel">
				<Carousel slides={slides} autoplay={false} interval={1000} />
			</div>
			<div
				className="middle-bar"
				style={{
					background: "#222",
					marginTop: "100px",
					marginLeft: "18%",
					border: "solid 1px #fff",
					borderRadius: "450%",
					fontSize: "3px",
					width: "66%",
				}}
			>
				<span>-</span>
			</div>
			<div
				className="about-site-title"
				style={{ textAlign: "center", marginTop: "60px" }}
			>
				<h2>Let???s talk about Shakes </h2>
				<p>How this thing actually works:</p>
			</div>
			<div className="tp-mdl-section">
				<div
					className="tp-mdl-sct-steps"
					style={{
						marginTop: "25px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<div
						className="steps-rnd-ckt"
						style={{
							display: "flex",
							flex: "3",
							justifyContent: "space-around",
						}}
					>
						<StepCard1 />

						<StepCard2 />

						<StepCard3 />
					</div>
					<div
						style={{
							width: "20%",
							position: "relative",
							display: "flex",
							flex: "1",
						}}
					>
						<iframe
							src="https://giphy.com/embed/UqYtB1pVGW5vUQKrfz"
							width="100%"
							height="88%"
							style={{ position: "relative", top: "20px" }}
							frameBorder="0"
							className="giphy-embed"
						></iframe>
					</div>
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
								<details
									style={{
										backgroundImage: "none",
									}}
								>
									<summary
										style={{
											border: "solid 2px #222",
											borderRadius: "5px",
											padding: "5px",
											textAlign: "center",
											width: "300px",
											position: "relative",
											left: "60px",
											listStyle: "none",
										}}
									>
										{" "}
										<strong
											style={{
												fontFamily: "sans-serif",
												fontSize: "18px",
											}}
										>
											<CommentIcon /> Community comments{" "}
										</strong>
									</summary>{" "}
									<ul
										style={{
											overflow: "scroll",
											height: "500px",
											width: "125%",
										}}
									>
										{allComments?.map((comm) => {
											return (
												<li
													key={comm.id}
													style={{
														display: "flex",

														flexDirection: "column",
														width: "90%",
														height: "90px",
														justifyContent: "flex-start",
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
								marginLeft: "5%",
							}}
						>
							{" "}
							Here's to over 100 million glasses raised.
						</h2>
						<p
							style={{
								marginTop: "20px",
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
