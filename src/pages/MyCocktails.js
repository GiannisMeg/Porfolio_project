import { useDispatch, useSelector } from "react-redux";

//thunks

//selectors
import { selectUserCocktails } from "../store/user/selectors";

import CreateFormMdl from "../components/CreateFormMdl";
import DetailsCard from "../components/DetailsCard";

//[Todo]
//		display favorites

//

export const MyCocktails = () => {
	const myCocktails = useSelector(selectUserCocktails);

	// console.log("my cocktails", myCocktails);
	return (
		<div className="main-mycocktails" style={{}}>
			<div className="mycocktails-tp-section">
				<div className="ckt-add">
					<div
						className="btn-create-modal"
						style={{
							display: "flex",
							position: "relative",
							left: "42%",
							marginTop: "20px",
						}}
					>
						<CreateFormMdl />
					</div>
				</div>
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
				<div className="btm-section" style={{}}></div>
			</div>
			<h2> HELLO</h2>
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
