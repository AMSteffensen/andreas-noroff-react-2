import styled from "styled-components";

const Card = styled.div`
	padding: 1em;
	margin-bottom: 1em;
	box-shadow: ${props => (props.species === "Asian" ? "10px 5px 5px black;" : "none")};
	background: ${props => (props.gender === "Female" ? "#d9534f" : "#5cb85c")};
	border-radius: ${props => props.theme.border.radius};
	color: ${props => (props.gender === "Female" ? "white" : "black")};
`;

export default Card;
