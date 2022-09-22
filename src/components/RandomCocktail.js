import { Button } from "@mui/material";
import { useState, useEffect } from "react";

import Loading from "./Loading";

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
		// console.log("cocktails fetched", data.drinks);
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
		<div className="rnd-modal" style={{}}>
			<section
				style={{
					// position: "relative",
					display: "flex",
					flexDirection: "row",

					minHeight: "830px",
					padding: "5px",
				}}
				className="random-cocktail"
			>
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
							className="rdm-cocktail"
							style={{
								display: "flex",
								flex: "1",
								position: "relative",
								flexDirection: "column",
								alignItems: "center",
								boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
								left: "45px",
							}}
						>
							<h3 style={{ marginBottom: "20px" }}>{strDrink}</h3>
							<h5 style={{ marginBottom: "20px" }}>{strCategory}</h5>
							<img
								src={strDrinkThumb}
								alt=""
								style={{
									borderRadius: "5px",
									maxWidth: "350px",
									maxHeight: "350px",
								}}
							/>
						</div>
						<div
							style={{
								padding: "40px",
								display: "flex",
								flex: "1",
								flexDirection: "column",
								justifyContent: "space-between",
								position: "relative",
								left: "40px",
							}}
							className="rdm-cocktail-instr"
						>
							<div>
								<h4>Ingredients ..</h4>

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
					<Loading />
				)}
				<Button
					className="btn-generate"
					style={{
						alignSelf: "center",
						margin: "40px 0",
						padding: "25px 50px",
						color: "#fff",
						fontSize: "20px",
						border: " 2px ridge #FFDEEA ",
						boxShadow: "2px 2px  hsl(0, 7%, 89%)",
						borderRadius: "8px",
						backgroundImage: `url("https://img.freepik.com/vrije-photo/selectie-van-verschillende-cocktails-op-de-tafel_140725-2909.jpg")`,
						position: "relative",
						left: "50px",
					}}
					variant="outlined"
					onClick={() => fetchApiCocktails()}
				>
					<strong style={{ fontFamily: "sans-serif" }}>
						Get a Random Drink{" "}
					</strong>
				</Button>
				<img
					style={{
						width: 600,
						height: 810,
						position: "relative",
						left: "210px",
					}}
					src="https://i.pinimg.com/originals/a8/cc/58/a8cc58a2f6125b2fccb41c480626b753.jpg"
					alt=""
				/>
			</section>
		</div>
	);
};
