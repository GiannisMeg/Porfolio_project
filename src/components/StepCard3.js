import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function StepCard3() {
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
						fontWeight: "550",
						fontSize: "22px",
						background: "#222",
						border: "1 px solid #222",
						borderRadius: "50%",
						padding: "15px",
					}}
				>
					3
				</Button>
			</div>
			<h3 style={{ padding: "15px" }}>Create your Own cocktail!</h3>
			<p>
				Visit your personal page! Add a new cocktail in our database so
				everybody can find out about your amazing recipes. Be creative and
				built your popularity among your colleagues or friends for the best
				barkeeper of the year!
			</p>
		</Box>
	);
}
