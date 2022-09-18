import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCocktail } from "react-icons/fa";

export const Navigation = () => {
	const [open, setOpen] = useState(false);

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
				<FaCocktail
					style={{ margin: "2px", width: "20%", color: "#caeaee" }}
				></FaCocktail>{" "}
				<p style={{ color: "#caeaee" }}> Shakes</p>
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
							color: "#caeaee",
							fontSize: "14px",
							fontWeight: "550",
							padding: "10px 15px",
							border: "solid 2px #ed5e7a ",
							borderRadius: "8px",
						}}
					>
						MyCocktails
					</Button>
				</MenuLink>
				<MenuLink to="/cocktails/findone">
					<Button
						style={{
							color: "#caeaee",
							fontSize: "14px",
							fontWeight: "550",
							margin: "-10px",
							padding: "9px 13px",
							border: "solid 2px #ed5e7a ",
							borderRadius: "8px",
						}}
						to="/login"
						// variant="contained"
					>
						Find More
					</Button>
					{/* <span style={{ fontSize: "22px", color: "#caeaee" }}> | </span> */}
				</MenuLink>
				{token ? (
					<Button
						style={{
							color: "#caeaee",
							fontSize: "14px",
							fontWeight: "550",
							padding: "10px 15px",
							border: "solid 2px #ed5e7a ",
							borderRadius: "50%",
						}}
						variant="outlined"
						onClick={() => dispatch(logOut())}
					>
						Logout
					</Button>
				) : (
					<MenuLink to="/login">
						<Button
							variant="outlined"
							style={{
								color: "#c700a3",
								fontWeight: "550",
								fontSize: "14px",
								padding: "10px 15px",
								border: "solid 2px #B108BD ",
								borderRadius: "50%",
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
`;

const Nav = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: #222;
	border-radius: "3px";
	font-weight: 1100;

	background-image: url(https://assets.londonist.com/uploads/2016/10/i875/4322658427_3c659b16c2_o.jpg);
`;

const Logo = styled.a`
	width : 50%
	padding: 1rem 0;
	color: #ececec;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;
	color: "#caeaee";

	span {
		font-weight: 1100;
		font-size: 1.3rem;
		color: "#caeaee";
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
