import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//thunks
import { postComment } from "../store/user/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// selectors
import { selectUser } from "../store/user/selectors";
import { Button, TextareaAutosize } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

//      [TODO]
// 			:Submit a comment
//			: comments have to appear after login and refresh page
//          : dispatch the list of comments / make end point to get comment and selector
//          : use modal or text area with submit button

export default function Comments() {
	const dispatch = useDispatch();
	// user gets his value when we are logged in
	const user = useSelector(selectUser);

	//states

	const [name, setName] = useState("");
	const [text, setText] = useState("");

	// submit comments
	const submitComment = (e) => {
		e.preventDefault();

		// userID we get it from the token and the body we dont have to send it
		// inside an object format cause in the backend get recognized as an array of objects
		dispatch(postComment(name, text));

		// setComment("");
		setName("");
		setText("");
		dispatch(
			showMessageWithTimeout("success", false, "comment added!", 2000)
		);
	};

	return (
		<div
			style={{
				position: "relative",

				left: "10%",
			}}
		>
			{/* IF NOT A USER CANT MAKE COMMEntS */}
			{!user ? (
				<Button
					className="btn-loggedOut-comment"
					type="contained"
					style={{
						color: "#ed5e7a",
						fontSize: "14px",
						fontWeight: "550",
						border: "solid 1.5px #ed5e7a ",
						// background: "#E2E1E1",
					}}
				>
					Login to leave a comment
				</Button>
			) : (
				<div>
					<div className="comments">
						<form className="comment-form" type="submit">
							<input
								type="text"
								value={name}
								placeholder="CocktailName"
								onChange={(e) => setName(e.target.value)}
							/>
							<br />

							<br />
							<TextareaAutosize
								style={{
									overflow: "hidden",
									maxHeight: "150px",
									height: "100px",
								}}
								type="text"
								row={4}
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<br />
							<Button
								variant="contained"
								startIcon={<ChatBubbleOutlineIcon />}
								style={{ background: "#222", color: "#fff" }}
								onClick={submitComment}
							>
								Submit Comment
							</Button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
