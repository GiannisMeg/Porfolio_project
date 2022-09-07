import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewModal from "../components/ReviewModal";

//CSS
import styled from "styled-components";

//[Todo] : ingredients has to Collapse with button
// 			: post a review
//			: review form has to opque
//			: import thunk and selector / set useState / dispatch action / conditional rendering (visible/hide ) while we display in return
//			:

//thunks
import { showSpecificCocktail } from "../store/cocktails/thunks";

//selectors
import { selectOneCocktail } from "../store/cocktails/selectors";

export const DetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const selectedCocktail = useSelector(selectOneCocktail);

	useEffect(() => {
		dispatch(showSpecificCocktail(id));
	}, [dispatch, id]);

	console.log("first", selectedCocktail);

	return (
		<Container>
			<h3>Details</h3>
			<div className="main">
				<section className="cocktail-details">
					<article
						style={{
							display: "flex",
							backgroundColor: "pink",
						}}
					>
						<div className="rdm-cocktail-n_i_c">
							<h3>{selectedCocktail.name}</h3>
							<h5>{selectedCocktail.category}</h5>

							<img
								src={selectedCocktail.imageUrl}
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
								Follow instructions : <br />{" "}
								{selectedCocktail.instructions}
							</p>
							<p>Suggested Glass : {selectedCocktail.glass}</p>
							<p>{selectedCocktail.ingredients}</p>
						</div>
					</article>
				</section>
			</div>
			<ReviewModal />
		</Container>
	);
};

const Container = styled.div`
	margin: 20px;
`;
