import styled from "styled-components";

const Heading = styled.h1 `
	color: ${props => props.theme.colors.primary};
	margin-top: 20px;
	background: ${props => props.background};
	font-size: ${props => (props.small ? "12px" : "32px")};
`;

export default Heading;