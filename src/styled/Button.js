import styled from "styled-components";

export const Button = styled.button`
	background: ${(props) => (props.primary ? "#9e043b" : "white")};
	color: ${(props) => (props.primary ? "white" : "#9e043b")};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #9e043b;
	border-radius: 3px;

	&:hover {
		border: 2px solid #1e3163;
	}
`;
