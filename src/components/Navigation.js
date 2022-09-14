import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
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
				FridayShakes<span>joinUs</span>
			</Logo>
			<Hamburger onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu open={open}>
				<MenuLink to="/mycocktails">
					<Button variant="contained" color="primary">
						MyCocktails
					</Button>
				</MenuLink>
				<MenuLink to="/cocktails/findone">
					<Button variant="contained" color="primary">
						Find More
					</Button>
				</MenuLink>
				{/* <MenuLink to={`/cocktails/${allCocktails.id}`}>
					<Button variant="contained" color="primary">
						Details
					</Button>
				</MenuLink> */}
				{token ? (
					<Button
						variant="contained"
						color="error"
						onClick={() => dispatch(logOut())}
					>
						Logout
					</Button>
				) : (
					<MenuLink variant="contained" color="success" to="/login">
						<Button variant="contained" color="success">
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
	background: #8b008b;
	/* position: absolute; */
	top: 0;
	left: 0;
	right: 0;
`;

const Logo = styled.a`
	padding: 1rem 0;
	color: #ececec;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;

	span {
		font-weight: 300;
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
