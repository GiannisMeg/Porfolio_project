import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//thunks
import { favoriteCocktail } from "../store/user/thunks";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function DetailsCard(props) {
	const dispatch = useDispatch();

	// console.log("cocktailId", cocktailId);
	//
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// console.log("loco", fetchCocktails);
	return (
		<Card sx={{ bgcolor: grey[300], maxWidth: 360 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: red[500] }} aria-label="">
						{props.userId}
					</Avatar>
				}
				action={<IconButton aria-label="settings"></IconButton>}
				title={` Cocktail - ${props.name}`}
				subheader="September 14, 2016"
			/>
			<CardMedia
				component="img"
				height="250"
				width="200"
				image={props.imageUrl}
				alt=""
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Suggested glass - {props.glass}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{/* WE ADD THE FAVORITE CASES WITH THW DIFF BORDERS */}
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>
						<strong> Method:</strong>
					</Typography>
					<Typography paragraph>{props.instructions}</Typography>

					<Typography paragraph>
						<strong> Ingredients/measure :</strong>
					</Typography>
					<Typography paragraph>{props.ingredients}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}