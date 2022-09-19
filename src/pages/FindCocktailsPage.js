import { useDispatch, useSelector } from "react-redux";

//thunks
import { showAllCocktails } from "../store/cocktails/thunks";

//selectors
import { selectAllCocktails } from "../store/cocktails/selectors";
import { useEffect, useState } from "react";
import DetailsCard from "../components/DetailsCard";

import SearchIcon from "@mui/icons-material/Search";

export const FindCocktailsPage = () => {
	const dispatch = useDispatch();
	const [searchName, setSearchName] = useState("");
	const fetchCocktailList = useSelector(selectAllCocktails);

	const filteredCocktails = fetchCocktailList?.filter((cktail) => {
		return cktail.name.toLowerCase().includes(searchName.toLowerCase());
	});

	useEffect(() => {
		dispatch(showAllCocktails());
	}, [dispatch]);

	// console.log("give me ", filteredCocktails);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				marginTop: "200px",
			}}
		>
			<div className="main" style={{ width: "100%" }}>
				<div
					className="c-input"
					style={{
						borderRadius: "8px",
						padding: "2.5rem",
						margin: "40px 600px 50px 600px ",

						boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
					}}
				>
					<div
						className="c-inner-box"
						style={{
							display: "flex",
							flexDirection: "row",
							background: "#E9E3E5",
							borderRadius: "8px",
							padding: "1rem",
							margin: "8px 25%",
							alignItems: "center",
							boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
						}}
					>
						<div
							className="src-icon"
							style={{
								display: "flex",
								margin: "0 10px 0 0",
								color: "#9e043b",
								borderRadius: "8px",
								border: "1px solid #9e043b ",
							}}
						>
							<SearchIcon />{" "}
						</div>
						<input
							style={{
								background: "#FFDAE7",
								borderRadius: "8px",
								border: "1px solid #ed5e7a ",
								display: "flex",
								width: "43%",
								boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
							}}
							className="input-find"
							placeholder="cocktail name"
							value={searchName}
							onChange={(e) => setSearchName(e.target.value)}
						/>
					</div>
				</div>

				<ul
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
					}}
					className="ckt-list"
				>
					{filteredCocktails &&
						filteredCocktails
							?.sort((name_a, name_b) => {
								return name_a.name.localeCompare(name_b.name);
							})
							.slice(0, 21)
							?.map((ckt) => {
								return (
									<li
										style={{
											listStyleType: "none",
											width: 300,
											margin: 10,
										}}
										key={ckt.id}
									>
										<DetailsCard
											id={ckt.id}
											name={ckt.name}
											imageUrl={ckt.imageUrl}
											glass={ckt.glass}
											instructions={ckt.instructions}
											ingredients={ckt.ingredients}
											userId={ckt.userId}
										/>
									</li>
								);
							})}
				</ul>
			</div>
		</div>
	);
};
