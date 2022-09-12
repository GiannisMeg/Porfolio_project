import { useState } from "react";
import { Link } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// thunk
import { addNewCocktail } from "../store/cocktails/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// selector
import { selectUser } from "../store/user/selectors";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 300,
	height: 300,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 16,
	column: 4,
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

	

	const submitNewCocktail = (e) => {
		e.preventDefault();
		dispatch(addNewCocktail(name, glass, instructions, ingredients));

		setName("");
		setGlass("");
		setInstructions("");
		setIngredients("");

		dispatch(
			showMessageWithTimeout("success", false, "comment added!", 2000)
		);
	};

	return (
		<div>
			{!user ? (
				<Link to={`/login`}>
					<Button
						variant="contained"
						color="success"
						startIcon={<SendIcon />}
						onClick={handleOpen}
					>
						Login to Add Your Own
					</Button>
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
								Add Your Own Cocktail!
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
								<br></br>
								<Button
									variant="contained"
									color="primary"
									startIcon={<SendIcon />}
									onClick={submitNewCocktail}
								>
									Add Your Own
								</Button>
							</form>
						</Box>
					</Modal>
					<Button
						variant="contained"
						color="success"
						startIcon={<SendIcon />}
						onClick={handleOpen}
					>
						Add Your Own
					</Button>
				</>
			)}
		</div>
	);
}
