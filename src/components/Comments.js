import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//thunks
import { postComment } from "../store/user/thunks";
import { showMessageWithTimeout } from "../store/appState/thunks";

// selectors
import { selectUser } from "../store/user/selectors";

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

		dispatch(postComment(name, text));

		// setComment("");
		setName("");
		setText("");
		dispatch(
			showMessageWithTimeout("success", false, "comment added!", 2000)
		);
	};

	// !user ?"You need to Log In first" :
	return (
		<div>
			{/* IF NOT A USER CANT MAKE COMMEntS */}
			{!user ? (
				"Login to leave a comment"
			) : (
				<div>
					<label htmlFor="">ADD Comments</label>
					<div className="comments">
						<form className="comment-form" type="submit">
							<label>Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<label>Text</label>
							<input
								type="text"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>

							<button onClick={submitComment}>Submit Comment</button>
						</form>
					</div>
				</div>
			)}
			{/* DISPLAY COMMENTS  */}
			{/* <div className="comment-box">
				<h2>Comments</h2>
				{comments?.map((comm) => (
					<div key={comm.id}>
						<h3>{comm.name}</h3>
						<p>{comm.text}</p>
					</div>
				))}
			</div> */}
		</div>
	);
}
