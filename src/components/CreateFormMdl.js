import { useState } from "react";
import { Link } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// thunk
import { addNewCocktail } from "../store/cocktails/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// selector
import { selectUser } from "../store/user/selectors";
import CocktailButton from "./CocktailButton";

const style = {
	display: "flex",
	flexDirection: "column",
	position: "relative",
	top: "45%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	height: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 16,
	column: 4,
	overflow: "hidden",
};

export default function CreateFormMdl() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	//states
	const [name, setName] = useState("");
	const [glass, setGlass] = useState("");
	const [instructions, setInstructions] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const submitNewCocktail = (e) => {
		e.preventDefault();
		dispatch(
			addNewCocktail(name, glass, instructions, imageUrl, ingredients)
		);

		setName("");
		setGlass("");
		setInstructions("");
		setIngredients("");
		setImageUrl("");

		handleClose();
		dispatch(
			showMessageWithTimeout(
				"success",
				false,
				"Cocktail successfully added!",
				2000
			)
		);
	};

	return (
		<div>
			{!user ? (
				<Link to={`/login`}>
					<CocktailButton />
				</Link>
			) : (
				<>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<Typography
								id="modal-modal-title"
								variant="h6"
								component="h2"
							>
								<strong style={{}}>Add Cocktail </strong>
							</Typography>
							<form type="submit">
								<Input
									id="modal-modal-description"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="name *"
									sx={{ mt: 4 }}
									required
								></Input>
								<br></br>
								<Input
									id="modal-modal-description"
									value={imageUrl}
									onChange={(e) => setImageUrl(e.target.value)}
									placeholder="imageUrl *"
									sx={{ mt: 4 }}
								></Input>
								<br></br>
								<Input
									id="modal-modal-description"
									value={glass}
									onChange={(e) => setGlass(e.target.value)}
									placeholder="glass *"
									sx={{ mt: 4 }}
									required
								></Input>
								<br></br>
								<Input
									id="modal-modal-description"
									value={instructions}
									onChange={(e) => setInstructions(e.target.value)}
									placeholder="instructions *"
									sx={{ mt: 4 }}
									required
								></Input>
								<br></br>
								<Input
									id="modal-modal-description"
									value={ingredients}
									onChange={(e) => setIngredients(e.target.value)}
									placeholder="ingredients *"
									sx={{ mt: 4 }}
									required
								></Input>

								<Button
									style={{
										color: "#fff",
										display: "flex",
										padding: "10px",
										marginTop: "20px",
										background: "goldenrod",
									}}
									variant="contained"
									startIcon={<AddCircleOutlineIcon />}
									onClick={submitNewCocktail}
								>
									Add Your Own
								</Button>
							</form>
						</Box>
					</Modal>

					<CocktailButton handleOpen={handleOpen} />
				</>
			)}
		</div>
	);
}
