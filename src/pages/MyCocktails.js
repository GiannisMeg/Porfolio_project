import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//selectors
import { selectUserCocktails, userFavorites } from "../store/user/selectors";

import CreateFormMdl from "../components/CreateFormMdl";
import DetailsCard from "../components/DetailsCard";

export const MyCocktails = () => {
	const myCocktails = useSelector(selectUserCocktails);
	const favoriteCocktails = useSelector(userFavorites);

	//my cocktails
	const ownedCocktailsCard = (
		<React.Fragment>
			<CardContent
				sx={{
					background: "#FFDEEA",
				}}
			>
				<Typography
					sx={{
						fontSize: 22,
						fontWeight: "550",
						display: "flex",
						flexDirection: "row-reverse",
					}}
					color="text.secondary"
					gutterBottom
				>
					My Cocktails
					<LocalBarIcon
						sx={{
							fontSize: 28,

							display: "flex",
							flexDirection: "row-reverse",
						}}
					/>
				</Typography>
				<div className="md-section" style={{}}>
					<ul
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-around",
						}}
					>
						{myCocktails &&
							myCocktails?.map((cocktail) => {
								return (
									<li
										style={{
											listStyleType: "none",
											width: 300,
											margin: 10,
										}}
										key={cocktail.id}
									>
										<DetailsCard
											id={cocktail.id}
											name={cocktail.name}
											imageUrl={
												!cocktail.imageUrl
													? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGe9Wkvu2ogozMTMDSJJv8GtRl8RK3jiMUXQ&usqp=CAU"
													: cocktail.imageUrl
											}
											glass={cocktail.glass}
											instructions={cocktail.instructions}
											ingredients={cocktail.ingredients}
											userId={cocktail.userId}
										/>
									</li>
								);
							})}
					</ul>
				</div>
			</CardContent>
		</React.Fragment>
	);
	// fav cocktails card
	const favoriteCocktailCard = (
		<React.Fragment>
			<CardContent
				sx={{
					background: "#FFDEEA",
				}}
			>
				<Typography
					sx={{
						fontSize: 22,
						fontWeight: "550",
						display: "flex",
					}}
					color="text.secondary"
					gutterBottom
				>
					Favorite Cocktails
					<FavoriteBorderIcon
						sx={{
							fontSize: 28,

							display: "flex",
							flexDirection: "row-reverse",
						}}
					/>
				</Typography>
				<div className="md-section" style={{}}>
					<ul
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-around",
						}}
					>
						{favoriteCocktails &&
							favoriteCocktails?.map((cocktail) => {
								return (
									<li
										style={{
											listStyleType: "none",
											width: 300,
											margin: 10,
										}}
										key={cocktail.id}
									>
										<DetailsCard
											id={cocktail.id}
											name={cocktail.name}
											imageUrl={
												!cocktail.imageUrl
													? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGe9Wkvu2ogozMTMDSJJv8GtRl8RK3jiMUXQ&usqp=CAU"
													: cocktail.imageUrl
											}
											glass={cocktail.glass}
											instructions={cocktail.instructions}
											ingredients={cocktail.ingredients}
											userId={cocktail.userId}
										/>
									</li>
								);
							})}
					</ul>
				</div>
			</CardContent>
		</React.Fragment>
	);

	// console.log("my cocktails", favoriteCocktails);
	return (
		<div className="main-mycocktails" style={{ marginTop: "160px" }}>
			<div className="mycocktails-tp-section">
				<div
					className="ckt-add"
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						background: "#222",
						marginBottom: "40px",
					}}
				>
					<div
						style={{
							width: "20%",
							position: "relative",
							display: "flex",
							flex: "1",
						}}
					>
						<iframe
							src="https://giphy.com/embed/loLzRfDxhDLwEEGzJS"
							width="100%"
							height="100%"
							style={{ position: "absolute" }}
							frameBorder="0"
							className="giphy-embed"
						></iframe>
					</div>
					<div
						className="btn-create-modal"
						style={{
							display: "flex",
							position: "relative",
							flex: "4",
							marginTop: "20px",
							position: "relative",
							left: "25%",
						}}
					>
						<CreateFormMdl />
					</div>
					<div
						style={{
							width: "20%",
							position: "relative",
							display: "flex",
							flex: "1",
						}}
					>
						<iframe
							src="https://giphy.com/embed/ckMiaoyvW6TnEGXDi6"
							width="100%"
							height="100%"
							style={{ position: "absolute" }}
							frameBorder="0"
							className="giphy-embed"
						></iframe>
					</div>
				</div>
				<div
					className="main-cards-container"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						// justifyContent: "space-around",
					}}
				>
					<Box
						sx={{
							minWidth: 275,
							margin: "40px",
							borderRadius: "8px",
							boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
						}}
					>
						<Card variant="outlined">{ownedCocktailsCard}</Card>
					</Box>

					<Box
						sx={{
							minWidth: 275,
							marginBottom: "40px",
							borderRadius: "8px",
							boxShadow: "0px 4px 24px rgb(0 0 0 / 10%)",
						}}
					>
						<Card variant="outlined">{favoriteCocktailCard}</Card>
					</Box>
				</div>
			</div>
			<div className="btm-section" style={{}}></div>
		</div>
	);
};

// https://assets.londonist.com/uploads/2016/10/i875/4322658427_3c659b16c2_o.jpg
//part starter
//https://cdn.broadsheet.com.au/cache/33/31/3331c2da248ffeb7a4973513e0f305ed.jpg
// bar background
//https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?cs=srgb&dl=pexels-cottonbro-4667030.jpg&fm=jpg

// cocktail portrait
//https://i.pinimg.com/originals/a8/cc/58/a8cc58a2f6125b2fccb41c480626b753.jpg
//https://i.pinimg.com/736x/7a/41/1e/7a411e162ad65da27573296f1df495ed.jpg

// cocktails
//https://www.cointreau.com/int/en/sites/int/files/styles/cocktail_image_l/public/cocktail-images/C0024-atlantic-cocktail.jpg?itok=JF8793EC
//https://miro.medium.com/max/375/1*wMu2qWLbiz957bRQt8rTUg.png
