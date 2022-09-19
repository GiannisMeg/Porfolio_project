import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewModal from "../components/ReviewModal";
import ReviewList from "../components/ReviewList";

//CSS

import StarBorderIcon from "@mui/icons-material/StarBorder";

//[Todo] : display a list of reviews

//thunks
import {
	showSpecificCocktail,
	showAllReviews,
} from "../store/cocktails/thunks";

//selectors
import {
	selectOneCocktail,
	selectAllReviews,
} from "../store/cocktails/selectors";
import { isUserFavorite, selectUser } from "../store/user/selectors";
import CocktailCard from "../components/CocktailCard";

export const DetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const selectedCocktail = useSelector(selectOneCocktail);
	const user = useSelector(selectUser);
	//takes the value of the selector whether is true or false
	const isFav = useSelector(isUserFavorite(parseInt(id)));
	const allReviews = useSelector(selectAllReviews);

	useEffect(() => {
		dispatch(showSpecificCocktail(id));
		dispatch(showAllReviews());
	}, [dispatch, id]);

	// console.log("all reviews", allReviews);
	return (
		<div className="wrapper" style={{ marginTop: "165px" }}>
			<div
				className="main_container"
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div
					className="split"
					style={{
						padding: "10px",
						display: "flex",
						flexDirection: "row",
						flex: "2",
					}}
				>
					<div className="split-1" style={{ display: "flex" }}>
						<div
							style={{
								position: "relative",
								top: "80px",
								display: "flex",
								flexDirection: "row",
								flex: "1",
							}}
						>
							<div
								className="split-2"
								style={{
									display: "flex",
									flex: "1",
								}}
							>
								{/* <img
									style={{ width: "1000px", height: "500px" }}
									src="https://cdn.shopify.com/s/files/1/0165/8909/5012/files/Website_Banner_4.png?v=1659410505"
									alt=""
								/> */}
							</div>
							<div
								className="main"
								style={{
									display: "flex",
									flex: "1",
									flexDirection: "column",
								}}
							>
								<h3
									style={{
										color: "#9e043b",
										alignSelf: "center",
										border: "2px inset #ed5e7a",
										borderRadius: "60%",
										boxShadow: "2px 2px  hsl(0, 5%, 88%)",
										padding: "20px",
									}}
								>
									{selectedCocktail.name}
								</h3>
								<CocktailCard
									id={selectedCocktail.id}
									name={selectedCocktail.name}
									imageUrl={selectedCocktail.imageUrl}
									glass={selectedCocktail.glass}
									instructions={selectedCocktail.instructions}
									ingredients={selectedCocktail.ingredients}
									userId={selectedCocktail.userId}
									isFav={isFav} // add true - false value in the card
								/>
								{user ? (
									<ReviewModal />
								) : (
									<div
										style={{ width: "400px" }}
										className="logged_out_review-text"
									>
										<p>
											Login and let us know about your favorite
											cocktail
										</p>{" "}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						background: "",
						width: "66%",
						display: "flex",
						flex: "1",
						flexDirection: "column",
					}}
					className="review-list"
				>
					<div className="r-foto-list">
						<img
							style={{
								width: "800px",
								height: "200px",
								borderRadius: "8px",
								boxShadow: "2px 2px  hsl(0, 5%, 94%)",
							}}
							src="http://www.gamingfortheweekend.com/wp-content/uploads/2017/08/Reviews-Banner.png"
							alt=""
						/>{" "}
					</div>
					<div className="r-list" style={{}}>
						{user || !user ? (
							<div
								style={{
									padding: "10px",
									display: "flex",
									width: "800px",
									height: "350px",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: "2px solid #ed5e7a",
									borderRadius: "10px",
									background: "#ffe0db",
									overflow: "scroll",
								}}
								className="comment-section"
							>
								{allReviews?.map((comm) => {
									return (
										<li
											style={{
												display: "flex",
												width: "60%",
												justifyContent: "space-between",
												border: "2px solid #ed5e7a",
												borderRadius: "10px",
												margin: 5,
												padding: 4,
												background: "#fff",
											}}
											key={comm.id}
										>
											<p style={{ overflowWrap: "break-word" }}>
												{comm.text}
											</p>
											<p>
												<strong>{comm.rating} </strong>
												<StarBorderIcon
													style={{ color: "goldenrod" }}
												/>
											</p>
										</li>
									);
								})}
							</div>
						) : (
							" "
						)}
						<img
							style={{
								width: "798px",
								height: "400",
								borderRadius: "10px",
								boxShadow: "2px 2px  hsl(0, 5%, 94%)",
								overflow: "hidden",
								marginBottom: "5px",
							}}
							src="https://m.media-amazon.com/images/I/7146kVR1CLL._SX522_.jpg"
							alt=""
						/>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

//under review img
//https://m.media-amazon.com/images/I/7146kVR1CLL._SX522_.jpg

//temp matching colors
//https://cdn.shopify.com/s/files/1/0165/8909/5012/files/Website_Banner_4.png?v=1659410505

// review
//http://www.gamingfortheweekend.com/wp-content/uploads/2017/08/Reviews-Banner.png
