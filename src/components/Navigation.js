import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCocktail } from "react-icons/fa";
//selector
// import { selectAllCocktails } from "../store/cocktails/selectors";

//thunks
// import { showAllCocktails } from "../store/cocktails/thunks";
// import { useEffect } from "react";

export const Navigation = () => {
	const [open, setOpen] = useState(false);
	// const { id } = useParams();
	// const allCocktails = useSelector(selectAllCocktails);

	const dispatch = useDispatch();

	const token = useSelector(selectToken);

	return (
		<Nav>
			<Logo href="/">
				<span
					style={{
						color: "#ed5e7a",
						fontSize: "22px",
					}}
				>
					Friday'
				</span>
				<FaCocktail style={{ margin: "2px", width: "20%" }}></FaCocktail>{" "}
				Shakes
			</Logo>
			<Hamburger onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu open={open}>
				<MenuLink to="/mycocktails">
					<Button
						style={{
							color: "#ed5e7a",
							fontSize: "14px",
							fontWeight: "550",
							border: "solid 2px #ed5e7a ",
						}}
					>
						MyCocktails
					</Button>
				</MenuLink>
				<MenuLink to="/cocktails/findone">
					<Button
						style={{
							color: "#ed5e7a",
							fontSize: "14px",
							fontWeight: "550",
							border: "solid 2px #ed5e7a ",
						}}
						to="/login"
						variant="outlined"
					>
						Find More
					</Button>
				</MenuLink>
				{token ? (
					<Button
						style={{
							color: "#f7264f",
							fontSize: "14px",
							fontWeight: "550",
							marginLeft: "2px",

							border: "solid 2px #f7264f ",
						}}
						variant="outlined"
						onClick={() => dispatch(logOut())}
					>
						Logout
					</Button>
				) : (
					<MenuLink
						// style={{
						// 	color: "#ed5e7a",
						// 	fontSize: "14px",
						// 	border: "solid 2px #ed5e7a ",
						// }}
						to="/login"
					>
						<Button
							variant="outlined"
							style={{
								color: "#D632E2",
								fontSize: "14px",
								border: "solid 2px #B108BD ",
							}}
						>
							Login
						</Button>
					</MenuLink>
				)}
			</Menu>
		</Nav>
	);
};

const MenuLink = styled(Link)`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #ececec;
	transition: all 0.3s ease-in;
	font-size: 0.9rem;

	&:hover {
		color: #9cc094;
	}
`;

const Nav = styled.div`
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: #585858;
`;

const Logo = styled.a`
	width : 50%
	padding: 1rem 0;
	color: #ececec;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;

	span {
		font-weight: 1100;
		font-size: 1.3rem;
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	span {
		height: 2px;
		width: 25px;
		background-color: #ececec;
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 780px) {
		display: flex;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 780px) {
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({ open }) => (open ? "300px" : "0")};
		transition: max-height 0.3s ease-in;
	}
`;
