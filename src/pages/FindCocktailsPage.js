import { useDispatch, useSelector } from "react-redux";

//thunks
import { showAllCocktails } from "../store/cocktails/thunks";

//selectors
import { selectAllCocktails } from "../store/cocktails/selectors";
import { useEffect, useState } from "react";
import DetailsCard from "../components/DetailsCard";
import CreateFormMdl from "../components/CreateFormMdl";

//[Todo]
//		add favorite

export const FindCocktailsPage = () => {
	const dispatch = useDispatch();
	const [searchName, setSearchName] = useState("");
	const fetchCocktailList = useSelector(selectAllCocktails);

	const filteredCocktails = fetchCocktailList.filter((cktail) => {
		return cktail.name.toLowerCase().includes(searchName.toLowerCase());
	});

	useEffect(() => {
		dispatch(showAllCocktails());
	}, [dispatch]);

	return (
		<div>
			<h2 style={{ textAlign: "center" }}>FindCocktail</h2>
			<div className="ckt-add">
				<CreateFormMdl />
			</div>

			<br />

			<div className="main">
				<div className="find-cocktail">
					<input
						className="input-find"
						placeholder="find cocktail"
						value={searchName}
						onChange={(e) => setSearchName(e.target.value)}
					/>
				</div>
				<div className="ckt-list">
					{filteredCocktails &&
						filteredCocktails
							.sort((name_a, name_b) => {
								return name_a.name.localeCompare(name_b.name);
							})
							.slice(0, 10)
							?.map((ckt) => {
								return (
									<ul key={ckt.id}>
										<DetailsCard
											id={ckt.id}
											name={ckt.name}
											imageUrl={ckt.imageUrl}
											glass={ckt.glass}
											instructions={ckt.instructions}
											ingredients={ckt.ingredients}
											userId={ckt.userId}
										/>
									</ul>
								);
							})}
				</div>
			</div>
		</div>
	);
};
