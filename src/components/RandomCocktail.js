import { Button } from "@mui/material";
import { useState, useEffect } from "react";

// apiUrl
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
export const RandomCocktail = () => {
	// state
	const [randomCocktail, setRandomCocktail] = useState([]);

	const fetchApiCocktails = async () => {
		const response = await fetch(url);
		const data = await response.json();
		//set incoming value
		setRandomCocktail(data.drinks);
		// console.log("cocktails fetched", data.drinks);
	};

	useEffect(() => {
		// appear cocktail from the load
		fetchApiCocktails();
	}, []);

	return (
		<div>
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					margin: "50px 0",
					padding: "50px",
				}}
				className="random-cocktail"
			>
				{randomCocktail.map((cocktail) => {
					// destructure needed apiNames
					const {
						idDrink,
						strDrink,
						strCategory,
						strDrinkThumb,
						strInstructions,
					} = cocktail;
					// display cocktail
					return (
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
									flexDirection: "column",
									alignItems: "center",
								}}
								className="rdm-cocktail-n_i_c"
							>
								<h3 style={{ marginBottom: "20px" }}>{strDrink}</h3>
								<h5 style={{ marginBottom: "20px" }}>{strCategory}</h5>
								<img
									src={strDrinkThumb}
									alt=""
									style={{
										borderRadius: "5px",
										width: "350px",
										height: "350px",
										maxWidth: "100%",
										marginBottom: "20px",
									}}
								/>
							</div>
							<div
								style={{
									width: "33%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
								className="rdm-cocktail-instr"
							>
								<div>
									<h4>Ingredients</h4>
									{/* Map here the ingedians inside the <ul> */}
									<ul>
										<li>
											<span>Whiskey:</span>
											<span>50ml</span>
										</li>
										<li>
											<span>Whiskey:</span>
											<span>50ml</span>
										</li>
										<li>
											<span>Whiskey:</span>
											<span>50ml</span>
										</li>
										<li>
											<span>Whiskey:</span>
											<span>50ml</span>
										</li>
										<li>
											<span>Whiskey:</span>
											<span>50ml</span>
										</li>
									</ul>
								</div>
								<div>
									<h4>How to make it...</h4>
									<div
										style={{
											maxHeight: "200px",
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
					);
				})}
				<Button
					style={{
						alignSelf: "center",
						margin: "50px 0",
						padding: "20px",
						background: "#222",
						color: "#fff",
						fontSize: "20px",
						border: "#222",
					}}
					variant="outlined"
					onClick={() => fetchApiCocktails()}
				>
					Generate a Random Cocktail
				</Button>
			</section>
		</div>
	);
};
