import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewModal from "../components/ReviewModal";

//CSS
import styled from "styled-components";

//[Todo] : ingredients has to Collapse with button
// 			: post a review

//thunks
import { showSpecificCocktail } from "../store/cocktails/thunks";

//selectors
import { selectOneCocktail } from "../store/cocktails/selectors";
import { isUserFavorite } from "../store/user/selectors";
import CocktailCard from "../components/CocktailCard";

export const DetailsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const selectedCocktail = useSelector(selectOneCocktail);

	const isFav = useSelector(isUserFavorite(parseInt(id)));

	useEffect(() => {
		dispatch(showSpecificCocktail(id));
	}, [dispatch, id]);

	return (
		<Container>
			<h3>Details</h3>
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
			<ReviewModal />
		</Container>
	);
};

const Container = styled.div`
	margin: 20px;
`;
