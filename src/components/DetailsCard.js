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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

//thunks
// import { favoriteCocktail } from "../store/user/thunks";

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
	// console.log("cocktailId", cocktailId);
	//
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// console.log("loco", fetchCocktails);
	return (
		<Card sx={{ bgcolor: "#CCBDF0", maxWidth: 360 }}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: "#ffdae7", color: "#9e043b" }}
						aria-label=""
					>
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
				<IconButton aria-label="barIcon">
					<LocalBarIcon />
				</IconButton>
				{/* <IconButton
						onClick={() => dispatch(favoriteCocktail(cocktailId))}
						aria-label="add to favorites"
					>
						{props.isFav ? (
							<FavoriteIcon style={{ color: "red" }} />
						) : (
							<FavoriteBorderIcon />
						)}
					</IconButton> */}
				<IconButton aria-label="deleteIcon">
					<AutoAwesomeIcon />
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
						<strong> Method :</strong>
					</Typography>
					<Typography paragraph> {props.instructions}</Typography>

					<Typography paragraph>
						<strong> Ingredients/measure</strong>
					</Typography>
					<Typography paragraph>{props.ingredients}</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
