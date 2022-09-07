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
			<section className="random-cocktail">
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
								backgroundColor: "pink",
							}}
							key={idDrink}
						>
							<div className="rdm-cocktail-n_i_c">
								<h3>{strDrink}</h3>
								<h5>{strCategory}</h5>
								<img
									src={strDrinkThumb}
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
									Follow instructions : <br /> {strInstructions}
								</p>
							</div>
						</article>
					);
				})}
				<Button variant="outlined" onClick={() => fetchApiCocktails()}>
					Random
				</Button>
			</section>
		</div>
	);
};
