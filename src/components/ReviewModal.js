import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";
import { TextareaAutosize } from "@mui/material";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

// thunk
import { postReview } from "../store/user/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";
import { selectOneCocktail } from "../store/cocktails/selectors";
import { useParams } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function ReviewModal() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const oneCocktail = useSelector(selectOneCocktail);

	// states
	const [text, setText] = useState("");
	const [rating, setRating] = useState([]);
	const [open, setOpen] = React.useState(false);
	//functionalities
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	//

	const submitNewReview = (e) => {
		e.preventDefault();
		//
		//twice wrong i guess
		dispatch(oneCocktail(id));
		//
		dispatch(postReview(text, rating, id));

		setText("");

		dispatch(
			showMessageWithTimeout("success", false, "comment added!", 2000)
		);
	};

	//stars state

	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const stars = Array(5).fill(0);

	// stars funcrionality
	const handleClick = (value) => {
		setCurrentValue(value);
	};

	const handleMouseOver = (newHoverValue) => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	const colors = {
		orange: "#FFBA5A",
		grey: "#a9a9a9",
	};
	const styles = {
		stars: {
			display: "flex",
			flexDirection: "row",
		},
	};
	//
	return (
		<div>
			<Button
				variant="outlined"
				color="primary"
				startIcon={<SendIcon />}
				onClick={handleOpen}
			>
				Add Review
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Review
					</Typography>
					<div style={styles.stars}>
						{stars.map((_, index) => {
							return (
								<FaStar
									key={index}
									value={rating}
									onChange={(e) => setRating(e.target.value)}
									size={24}
									onClick={() => handleClick(index + 1)}
									onMouseOver={() => handleMouseOver(index + 1)}
									onMouseLeave={handleMouseLeave}
									color={
										(hoverValue || currentValue) > index
											? colors.orange
											: colors.grey
									}
									style={{
										marginRight: 10,
										cursor: "pointer",
									}}
								></FaStar>
							);
						})}
					</div>

					<form type="submit">
						<TextareaAutosize
							value={text}
							onChange={(e) => setText(e.target.value)}
							aria-label="minimum height"
							minRows={4}
							placeholder="Cocktail experience"
							style={{ width: 300 }}
							required
						/>

						<br></br>
						<Button
							variant="contained"
							color="primary"
							startIcon={<SendIcon />}
							onClick={submitNewReview}
						>
							Add Review
						</Button>
					</form>
				</Box>
			</Modal>
		</div>
	);
}
