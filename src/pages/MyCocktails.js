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
