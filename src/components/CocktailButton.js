import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
	// {
	// 	url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMpz_2IwGIqy4hHN8Pack_JqUSjyIIqxZwa5HIKaM-x_onrTxH6CNIvFqO1F3kkcckfY&usqp=CAU",
	// 	title: " ",
	// 	width: "300px",
	// },
	{
		url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-make-cocktails-1605107977.jpg",
		title: "Add your Own",
		width: "900px",
	},
	// {
	// 	url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocktail-making9-1605106522.jpg?crop=1.00xw:0.833xh;0,0.0633xh&resize=980:*",
	// 	title: "",
	// 	width: "300px",
	// },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	height: 200,
	[theme.breakpoints.down("sm")]: {
		width: "100% !important", // Overrides inline-style
		height: 100,
	},
	"&:hover, &.Mui-focusVisible": {
		zIndex: 1,
		"& .MuiImageBackdrop-root": {
			opacity: 0.15,
		},
		"& .MuiImageMarked-root": {
			opacity: 0,
		},
		"& .MuiTypography-root": {
			border: "3px solid currentColor",
			fontSize: "1.5rem",
		},
	},
}));

const ImageSrc = styled("span")({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: "cover",
	backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: "absolute",
	bottom: -2,
	left: "calc(50% - 9px)",
	transition: theme.transitions.create("opacity"),
}));

export default function CocktailButton(handleOpen) {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				width: "100%",
				marginBottom: "60px",
				marginTop: "40px",
				position: "relative",
				right: "160px",
			}}
		>
			{images.map((image) => (
				<ImageButton
					focusRipple
					key={image.title}
					style={{
						width: image.width,
					}}
					onClick={handleOpen.handleOpen}
				>
					<ImageSrc
						style={{
							backgroundImage: `url(${image.url})`,
						}}
					/>
					<ImageBackdrop className="MuiImageBackdrop-root" />
					<Image>
						<Typography
							component="span"
							variant="subtitle1"
							color="inherit"
							sx={{
								position: "relative",
								p: 4,
								pt: 2,
								pb: (theme) => `calc(${theme.spacing(1)} + 2px)`,
							}}
						>
							{image.title}
							<ImageMarked className="MuiImageMarked-root" />
						</Typography>
					</Image>
				</ImageButton>
			))}
		</Box>
	);
}
