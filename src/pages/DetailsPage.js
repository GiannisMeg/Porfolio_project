import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewModal from "../components/ReviewModal";
import ReviewList from "../components/ReviewList";

//CSS
import styled from "styled-components";
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
		<div className="wrapper" style={{ display: "flex" }}>
			<div
				className="main_container"
				style={{ width: "33%", padding: "10px" }}
			>
				<h3 style={{ color: "#9e043b" }}>{selectedCocktail.name}</h3>
				<div className="main">
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
				</div>
				{user ? (
					<ReviewModal />
				) : (
					<div style={{}} className="logged_out_review-text">
						<p>Login and let us know about your favorite cocktail</p>{" "}
					</div>
				)}
			</div>
			<div
				style={{
					background: "",
					width: "66%",
					padding: "10px",
					marginTop: "40px",
				}}
				className="review-list"
			>
				{" "}
				{/* <h3 style={{ textAlign: "center" }}> </h3> */}
				{user || !user ? (
					<div
						style={{
							padding: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							border: "2px solid #ed5e7a",
							borderRadius: "10px",
							background: "#ffe0db",
						}}
						className="comment-section"
					>
						{allReviews?.map((comm) => {
							return (
								<li
									style={{
										display: "flex",
										width: "100%",
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
										<StarBorderIcon style={{ color: "goldenrod" }} />
									</p>
								</li>
							);
						})}
					</div>
				) : (
					" "
				)}
			</div>
		</div>
	);
};
