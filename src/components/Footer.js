import React from "react";
import "./Footer.css";
import styled from "styled-components";
import { FaCocktail } from "react-icons/fa";
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

export default function Footer() {
	return (
		<div
			className="footer-box"
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{" "}
			<div
				className="footer-list"
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Logo
					className="logo-footer"
					style={{
						border: "2px inset #ed5e7a",
						padding: "18px",
						borderRadius: "50%",
						position: "relative",
						right: "120px",
					}}
				>
					<span
						style={{
							color: "#ed5e7a",
							fontSize: "22px",
						}}
					>
						Friday'
					</span>
					<FaCocktail
						style={{
							margin: "2px",
							width: "20%",
							color: "#caeaee",
						}}
					></FaCocktail>{" "}
					<p style={{ color: "#caeaee" }}>Shakes</p>
				</Logo>
				<div
					className="ul-footer-links"
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<ul
						className="f-link-1"
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<h4>FrontEnd Technologies </h4>

						<li>React</li>
						<li>Redux</li>
						<li>Mui5</li>
						<li>3D modals</li>
					</ul>
					<ul
						className="f-link-2"
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<h4>BackEnd Technologies</h4>
						<li>NodeJS</li>
						<li>Sequelize</li>
						<li>ElephantSQl</li>
						<li>RestAPI</li>
					</ul>

					<ul className="f-link-3">
						Follow Us
						<li>
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="12.2017"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									d="M14.2183 18.1317V12.8147H16.0177L16.2851 10.733H14.2183V9.40695C14.2183 8.80623 14.3862 8.39493 15.2511 8.39493H16.3469V6.53892C15.8137 6.48196 15.2778 6.45445 14.7415 6.45653C13.1511 6.45653 12.0591 7.42443 12.0591 9.2013V10.7291H10.2715V12.8108H12.063V18.1317H14.2183Z"
									fill="#535399"
								/>
							</svg>
							<br />
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="12.4075"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									d="M18.3616 9.89817C18.355 9.40684 18.2627 8.92039 18.0889 8.46059C17.9381 8.07275 17.7079 7.72052 17.4129 7.4264C17.1178 7.13229 16.7645 6.90276 16.3755 6.75248C15.9201 6.5821 15.4391 6.48997 14.9529 6.48002C14.3269 6.45212 14.1284 6.44434 12.5392 6.44434C10.9501 6.44434 10.7464 6.44434 10.1249 6.48002C9.63892 6.49004 9.15814 6.58217 8.70303 6.75248C8.31392 6.90266 7.96053 7.13215 7.66549 7.42627C7.37044 7.7204 7.14023 8.07268 6.98959 8.46059C6.81833 8.91413 6.72611 9.39353 6.71692 9.87806C6.68894 10.5028 6.68048 10.7006 6.68048 12.2848C6.68048 13.869 6.68048 14.0714 6.71692 14.6916C6.72668 15.1769 6.81844 15.6556 6.98959 16.1104C7.14049 16.4982 7.37087 16.8503 7.66601 17.1443C7.96115 17.4383 8.31457 17.6677 8.70368 17.8179C9.15754 17.9951 9.63841 18.0938 10.1256 18.1098C10.7523 18.1377 10.9507 18.1461 12.5399 18.1461C14.129 18.1461 14.3327 18.1461 14.9542 18.1098C15.4404 18.1002 15.9215 18.0083 16.3768 17.838C16.7657 17.6875 17.1189 17.4579 17.414 17.1638C17.709 16.8697 17.9393 16.5176 18.0902 16.1299C18.2613 15.6758 18.3531 15.197 18.3629 14.7111C18.3908 14.087 18.3993 13.8892 18.3993 12.3043C18.398 10.7201 18.398 10.519 18.3616 9.89817ZM12.5353 15.2807C10.8733 15.2807 9.52689 13.9385 9.52689 12.2816C9.52689 10.6247 10.8733 9.28253 12.5353 9.28253C13.3332 9.28253 14.0984 9.5985 14.6626 10.1609C15.2268 10.7234 15.5438 11.4862 15.5438 12.2816C15.5438 13.077 15.2268 13.8398 14.6626 14.4023C14.0984 14.9647 13.3332 15.2807 12.5353 15.2807ZM15.6635 9.87092C15.275 9.87092 14.962 9.55824 14.962 9.17159C14.962 9.0798 14.9801 8.9889 15.0154 8.9041C15.0506 8.81929 15.1023 8.74223 15.1674 8.67732C15.2325 8.61241 15.3098 8.56093 15.3949 8.5258C15.4799 8.49067 15.5711 8.47259 15.6632 8.47259C15.7553 8.47259 15.8465 8.49067 15.9315 8.5258C16.0166 8.56093 16.0939 8.61241 16.159 8.67732C16.2241 8.74223 16.2758 8.81929 16.311 8.9041C16.3463 8.9889 16.3644 9.0798 16.3644 9.17159C16.3644 9.55824 16.0507 9.87092 15.6635 9.87092Z"
									fill="#535399"
								/>
								<path
									d="M12.5354 14.2294C13.6147 14.2294 14.4896 13.3572 14.4896 12.2813C14.4896 11.2053 13.6147 10.3331 12.5354 10.3331C11.4561 10.3331 10.5812 11.2053 10.5812 12.2813C10.5812 13.3572 11.4561 14.2294 12.5354 14.2294Z"
									fill="#535399"
								/>
							</svg>
							<br />
							<svg
								width="26"
								height="25"
								viewBox="0 0 26 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<ellipse
									cx="13.1107"
									cy="12.1637"
									rx="12.2017"
									ry="12.1637"
									fill="white"
								/>
								<path
									d="M20.8191 7.71289C20.2757 7.95291 19.692 8.1151 19.0783 8.1884C19.7115 7.81071 20.1852 7.21626 20.4111 6.51598C19.8162 6.86823 19.1651 7.11618 18.4862 7.24904C18.0296 6.76306 17.4248 6.44094 16.7658 6.3327C16.1067 6.22445 15.4303 6.33615 14.8414 6.65043C14.2526 6.96471 13.7843 7.46401 13.5093 8.07079C13.2342 8.67758 13.1679 9.3579 13.3204 10.0061C12.115 9.94581 10.9358 9.63348 9.85934 9.08943C8.78286 8.54537 7.83316 7.78176 7.07188 6.84813C6.81157 7.29575 6.6619 7.81474 6.6619 8.36745C6.66161 8.86503 6.78452 9.35498 7.01974 9.79384C7.25495 10.2327 7.59519 10.6069 8.01027 10.8832C7.52889 10.868 7.05813 10.7383 6.63717 10.505V10.5439C6.63712 11.2418 6.87927 11.9182 7.32254 12.4583C7.7658 12.9985 8.38287 13.3691 9.06905 13.5073C8.62249 13.6278 8.1543 13.6456 7.69986 13.5592C7.89346 14.1597 8.27057 14.6848 8.7784 15.061C9.28623 15.4372 9.89936 15.6457 10.532 15.6572C9.45809 16.4976 8.13189 16.9534 6.76667 16.9514C6.52484 16.9515 6.28321 16.9374 6.04303 16.9093C7.4288 17.7975 9.04194 18.2689 10.6894 18.2671C16.2664 18.2671 19.3152 13.6624 19.3152 9.6688C19.3152 9.53906 19.312 9.40801 19.3061 9.27827C19.8991 8.85074 20.411 8.32133 20.8178 7.71483L20.8191 7.71289Z"
									fill="#535399"
								/>
							</svg>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="prv-sct"
				style={{
					display: "flex",
					flexDirection: "column",
					paddingTop: "20px",
					background: "#222",
					color: "#caeaee",
					textAlign: "center",
				}}
			>
				<p>
					Privacy Notice | Terms of Service | Interest Based Ads | CA
					Privacy Rights | Do Not Sell My Personal Information
				</p>

				<p> © Friday'Shakes All Rights Reserved</p>
			</div>
		</div>
	);
}
