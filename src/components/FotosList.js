import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function FotosList() {
	return (
		<ImageList
			sx={{ width: 900, height: 498, bottom: 20, borderRadius: "5px" }}
			variant="quilted"
			cols={4}
			rowHeight={121}
		>
			{itemData.map((item) => (
				<ImageListItem
					key={item.img}
					cols={item.cols || 1}
					rows={item.rows || 1}
				>
					<img
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "https://m.media-amazon.com/images/I/41TWBs2+l3L._SL500_.jpg",
		title: "Breakfast",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://www.oliviascuisine.com/wp-content/uploads/2020/09/caipirinha-thumb-1-735x735.jpg",
		title: "Burger",
	},
	{
		img: "https://i2.wp.com/media.scoutmagazine.ca/2019/08/38958920012_e5b4c19100_k.jpg?resize=2000%2C1333&ssl=1",
		title: "Camera",
	},
	{
		img: "https://vinepair.com/wp-content/uploads/2020/07/whiskeysour_card.jpg",
		title: "Coffee",
		cols: 2,
	},
	{
		img: "https://www.thedataschool.com.au/wp-content/uploads/2020/09/jcblog9.jpg",
		title: "Hats",
		cols: 2,
	},
	{
		img: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F4362a676-0bbe-11ea-8f6d-195dfbf668c7.jpg?crop=1500%2C844%2C0%2C78",
		title: "Honey",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://www.liquor.com/thmb/FpQjWZNtBBC8PoW8aPfUj7cysYg=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08110806__negroni-720x720-recipe-7c1b747a616f4659af4008d025ab55df.jpg",
		title: "Basketball",
	},
	{
		img: "https://dosmaderas.com/wp-content/uploads/2021/10/Dos-Maderas-rum-Cocktail-Espresso-Martini-HERO-6.jpg",
		title: "Fern",
	},
];
