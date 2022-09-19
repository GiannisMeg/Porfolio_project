import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function StepCard2() {
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
					2
				</Button>
			</div>
			<h3 style={{ padding: "15px" }}>Login to discover more</h3>
			<p>
				Find all cocktails by name , explore the website and add comments
				and reviews about your favorite cocktails and your experiences.
			</p>
		</Box>
	);
}
