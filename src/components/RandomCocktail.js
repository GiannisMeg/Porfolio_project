import { Button } from "@mui/material";
import { useState, useEffect } from "react";

// apiUrl
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
export const RandomCocktail = () => {
	// state
	const [randomCocktail, setRandomCocktail] = useState(null);

	const fetchApiCocktails = async () => {
		const response = await fetch(url);
		const data = await response.json();
		//set incoming value
		setRandomCocktail(data.drinks[0]);
		console.log("cocktails fetched", data.drinks);
	};

	useEffect(() => {
		// appear cocktail from the load
		fetchApiCocktails();
	}, []);

	const {
		idDrink,
		strDrink,
		strCategory,
		strDrinkThumb,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4,
		strIngredient5,
		strMeasure1,
		strMeasure2,
		strMeasure3,
		strMeasure4,
		strMeasure5,
	} = randomCocktail || {};

	return (
		<div>
			<section
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					minHeight: "830px",
					padding: "50px",
				}}
				className="random-cocktail"
			>
				<Button
					className="btn-generate"
					style={{
						alignSelf: "center",
						margin: "50px 0",
						padding: "20px",
						color: "#fff",
						fontSize: "20px",
						border: "#222",
						boxShadow: "2px 2px  hsl(0, 7%, 89%)",
					}}
					variant="outlined"
					onClick={() => fetchApiCocktails()}
				>
					Generate Random Cocktail
				</Button>
				{randomCocktail ? (
					<article
						style={{
							display: "flex",
							alignContent: "center",
							justifyContent: "space-around",
							alignItems: "center",
						}}
						key={idDrink}
					>
						<div
							style={{
								display: "flex",
								flex: "1",
								position: "relative",
								flexDirection: "column",
								alignItems: "center",
							}}
							className="rdm-cocktail-n_i_c"
						>
							<h3 style={{ marginBottom: "20px" }}>{strDrink}</h3>
							<h5 style={{ marginBottom: "20px" }}>{strCategory}</h5>
							<img
								src={strDrinkThumb || "https://via.placeholder.com/350"}
								alt=""
								style={{
									borderRadius: "5px",
									maxWidth: "350px",
									maxHeight: "350px",
									marginBottom: "20px",
								}}
							/>
						</div>
						<div
							style={{
								// width: "33%",
								display: "flex",
								flex: "1",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
							className="rdm-cocktail-instr"
						>
							<div>
								<h4>Ingredients ..</h4>
								{/* Map here the ingedians inside the <ul> */}
								<ul style={{ listStyleType: "none" }}>
									<li>
										<span>{strIngredient1} </span>
										<span>{strMeasure1} </span>
									</li>
									<li>
										<span>{strIngredient2} </span>
										<span>{strMeasure2} </span>
									</li>
									<li>
										<span>{strIngredient3} </span>
										<span>{strMeasure3} </span>
									</li>
									<li>
										<span>{strIngredient4} </span>
										<span>{strMeasure4} </span>
									</li>
									<li>
										<span>{strIngredient5} </span>
										<span>{strMeasure5} </span>
									</li>
								</ul>
							</div>
							<div>
								<h4>How to make it...</h4>
								<div
									style={{
										height: "200px",
										maxWidth: "300px",
										minWidth: "200px",
										// overflowY: "scroll",
										overflow: "scroll",
										overflowX: "hidden",
									}}
								>
									{strInstructions}
								</div>
							</div>
						</div>
					</article>
				) : (
					<p>Loading...</p>
				)}
			</section>
		</div>
	);
};
