import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//thunks
import { postComment } from "../store/user/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// selectors
import { selectUser } from "../store/user/selectors";
import { Button } from "@mui/material";

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

	// const [comment, setComment] = useState("");

	const [name, setName] = useState("");
	const [text, setText] = useState("");
	// const userId = user.id;

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
				"Login to leave a comment"
			) : (
				<div>
					<label htmlFor="">Comments</label>
					<div className="comments">
						<form className="comment-form" type="submit">
							<label>CocktailName</label>
							<br />
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<br />
							<label>Text</label>
							<br />
							<input
								type="text"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<br />
							<Button
								variant="contained"
								style={{ background: "orange", color: "black" }}
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
