import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

export default function TwitCard3() {
	return (
		<Card
			sx={{
				width: 250,
				height: 300,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<CardContent>
				<Typography
					sx={{ fontSize: 14, marginLeft: "10%", paddingTop: "30px" }}
					color="text.secondary"
					gutterBottom
				>
					Looking at these snow predictions I’m not sure I’ll have adequate
					booze. Hey @FridayShakes u up?
				</Typography>
				<Typography
					sx={{ mb: 1.5, padding: "15px", marginLeft: "5%" }}
					color="text.secondary"
				>
					Jessica
				</Typography>
			</CardContent>
			<CardActions>
				<Button style={{ display: "flex", marginLeft: "38%" }} size="xs">
					<svg
						role="presentation"
						xmlns="http://www.w3.org/2000/svg"
						className="social_section-module__twitterLogo___3THDa"
						viewBox="0 0 400 400"
						style={{ fill: "#1da1f2" }}
					>
						<path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"></path>
					</svg>
				</Button>
			</CardActions>
		</Card>
	);
}
