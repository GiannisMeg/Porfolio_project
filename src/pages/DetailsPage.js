import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewModal from "../components/ReviewModal";

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
import { Box } from "@mui/material";

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
		<div
			className="wrapper"
			style={{
				marginTop: "165px",
				flexDirection: "column",
				display: "flex",
			}}
		>
			<div
				className="tp-banner"
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: "-3px",
					wordWrap: "break-word",
				}}
			>
				<Box sx={{}}>
					<img
						style={{
							width: "100%",
							height: "202px",
							position: "relative",
						}}
						src="https://www.spirituosen-journal.de/wp-content/uploads/Bombay-Bramble-Drinks-Social.jpg"
						alt=""
					/>
				</Box>
				<Box sx={{}}>
					<img
						style={{
							width: "134%",
							height: "202px",
							position: "relative",
							left: "",
						}}
						src="https://cdn.shopify.com/s/files/1/2788/1238/files/5665_NGF_Tanqueray_Promo_Homepage_Banner_1600X900_171bbc5c-7447-4c4b-afb2-28d555370785_1920x.jpg?v=1652353683"
						alt=""
					/>
				</Box>
				<Box sx={{}}>
					<img
						style={{
							width: "100%",
							height: "202px",
							position: "relative",
							left: "31%",
						}}
						src="https://www.spirituosen-journal.de/wp-content/uploads/Bombay-Bramble-Drinks-Social.jpg"
						alt=""
					/>
				</Box>
				<Box sx={{}}>
					<img
						style={{
							width: "134%",
							height: "202px",
							position: "relative",
							left: "33%",
						}}
						src="https://cdn.shopify.com/s/files/1/2788/1238/files/5665_NGF_Tanqueray_Promo_Homepage_Banner_1600X900_171bbc5c-7447-4c4b-afb2-28d555370785_1920x.jpg?v=1652353683"
						alt=""
					/>
				</Box>
				<Box sx={{}}>
					<img
						style={{
							width: "100%",
							height: "202px",
							position: "relative",
							left: "62%",
						}}
						src="https://www.spirituosen-journal.de/wp-content/uploads/Bombay-Bramble-Drinks-Social.jpg"
						alt=""
					/>
				</Box>
				<Box sx={{}}>
					<img
						style={{
							width: "125%",
							height: "202px",
							position: "relative",
							left: "65%",
						}}
						src="https://cdn.shopify.com/s/files/1/2788/1238/files/5665_NGF_Tanqueray_Promo_Homepage_Banner_1600X900_171bbc5c-7447-4c4b-afb2-28d555370785_1920x.jpg?v=1652353683"
						alt=""
					/>
				</Box>
			</div>
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
					<div
						className="split"
						style={{ display: "flex", flexDirection: "row" }}
					>
						<div
							style={{
								position: "relative",
								top: "80px",
								display: "flex",
								flexDirection: "row",
							}}
						>
							<div
								className="main-2"
								style={{
									display: "flex",
									flex: "1",
									flexDirection: "column",
									position: "relative",
									top: "13%",
									left: "150%",
								}}
							>
								<h3
									style={{
										color: "#9e043b",
										alignSelf: "center",
										border: "2px inset #ed5e7a",
										borderRadius: "60%",
										boxShadow: "2px 2px  hsl(0, 5%, 70%)",
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
						display: "flex",
						flexDirection: "column",
					}}
					className="review-list"
				>
					<div
						className="r-list"
						style={{
							display: "flex",
							flex: "1",
							flexDirection: "column",
						}}
					>
						{user || !user ? (
							<div
								style={{
									marginTop: "100px",

									display: "flex",
									width: "800px",
									height: "450px",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									border: "8px solid #fff",
									borderRadius: "20px",
									background: "#ffe0db",

									// how to remove corners from schroll
									overflow: "scroll",
								}}
								className="comment-section"
							>
								<img
									style={{
										width: "80%",
										marginBottom: "20px",
										height: "200px",
										borderRadius: "50%",
										boxShadow: "2px 2px  hsl(0, 5%, 94%)",
									}}
									src="http://www.gamingfortheweekend.com/wp-content/uploads/2017/08/Reviews-Banner.png"
									alt=""
								/>{" "}
								{allReviews?.map((comm) => {
									return (
										<li
											style={{
												display: "flex",
												width: "60%",
												justifyContent: "space-between",
												border: "2px solid #ed5e7a",
												borderRadius: "10px",
												margin: "40px",
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
								// overflow: "hidden",
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
