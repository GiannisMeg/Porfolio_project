import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";

//css
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";
import { TextareaAutosize } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";

// thunk
import { postReview } from "../store/cocktails/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// starts css
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

	// states
	const [text, setText] = useState("");
	const [open, setOpen] = React.useState(false);
	const [rating, setRating] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const cocktailId = id;

	const submitNewReview = (e) => {
		e.preventDefault();

		dispatch(postReview(text, rating, cocktailId));

		setText("");

		dispatch(
			showMessageWithTimeout("success", false, "Review Submitted!", 2000)
		);

		// close modal
		handleClose();
	};

	// replace array with rating array
	const stars = Array(5).fill(0);

	// stars functionality
	const handleClick = (value) => {
		setRating(value);
	};

	const handleMouseOver = (newHoverValue) => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};
	// starts css
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
	// console.log("rating", rating);
	return (
		<div>
			<Button
				style={{
					margin: "20px 0",
					color: "#ed5e7a",
					width: "500px",

					background: "#222",
					padding: "20px 0",
					border: "solid 4px #ed5e7a ",
					fontWeight: "550",
				}}
				variant="outlined"
				startIcon={<RateReviewIcon style={{ fontSize: "large" }} />}
				onClick={handleOpen}
			>
				<strong> Add Review</strong>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<strong>Review</strong>
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
										(hoverValue || rating) > index
											? colors.orange
											: colors.grey
									}
									style={{
										padding: 5,
										marginRight: 5,
										marginBottom: 5,
										cursor: "pointer",
									}}
								></FaStar>
							);
						})}
					</div>

					<form type="submit">
						<TextareaAutosize
							value={text}
							maxLength={300}
							onChange={(e) => setText(e.target.value)}
							aria-label="minimum height"
							minRows={4}
							placeholder="Cocktail experience"
							style={{ width: 300 }}
							required
						/>

						<br></br>
						<Button
							style={{ background: "goldenrod", margin: "5px" }}
							variant="contained"
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
