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
					margin: "60px",
					border: "solid 1px #fff",
					borderRadius: "20px",
				}}
			>
				<span>------</span>
			</div>
			<div className="mdl-section" style={{ display: "flex" }}>
				<div
					className="random_cocktails"
					style={{ display: "flex", flex: "3" }}
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
						justifyContent: "space-around",
						alignItems: "center",
						// border: "2px solid #222",
						borderRadius: "10px",
						// background: "#E2E1E1",
					}}
				>
					<Comments />

					{user || !user ? (
						<div className="comment-section">
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
						</div>
					) : (
						" "
					)}
				</div>
			</div>
			<div
				className="middle-bar"
				style={{
					background: "#222",
					margin: "60px",
					border: "solid 1px #fff",
					borderRadius: "20px",
				}}
			>
				<span>------</span>
			</div>
			<div
				className="btm-section"
				style={{
					display: "flex",
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
						flex: "1",
						position: "relative",
					}}
				>
					<FotosList />
				</div>
			</div>
		</div>
	);
};
