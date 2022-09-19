import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function StepCard1() {
	return (
		<Box
			component="span"
			sx={{
				margin: "20px",
				width: "500px",
				p: 2,
				border: "1px dashed grey",
				display: "flex",
				flexDirection: "column",
				textAlign: "center",
				border: "1px inset #ed5e7a",
				boxShadow: "2px 2px  hsl(0, 7%, 94%)",
				borderRadius: "8px",
			}}
		>
			<div style={{ textAlign: "center" }}>
				<Button
					variant="contained"
					style={{
						width: "80px",
						fontSize: "22px",
						fontWeight: "550",
						background: "#222",
						border: "1 px solid #222",
						borderRadius: "50%",
						padding: "15px",
					}}
				>
					1
				</Button>
			</div>
			<h3 style={{ padding: "15px" }}>Find a random Cocktail</h3>
			<p>
				You don't feel creative and you want to impress your colleageus or
				friends? ...Hit the button and have the best cocktail recipe in a
				blink of an eye!
			</p>
		</Box>
	);
}
