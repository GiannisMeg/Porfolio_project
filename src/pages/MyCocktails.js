import { useDispatch, useSelector } from "react-redux";

//thunks

//selectors

import { useEffect, useState } from "react";
import CreateFormMdl from "../components/CreateFormMdl";

//[Todo]
//		User profile can display in a cart
// 		display a list of cocktail by id
//

export const MyCocktails = () => {
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
				<div className="md-section"></div>
				<div className="btm-section"></div>
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
