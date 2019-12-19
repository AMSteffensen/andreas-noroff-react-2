import styled from "styled-components";

const ButtonState = styled.button`
	font-size: 1.5em;
	padding: 1em;
	border-radius: ${props => props.theme.border.radius};
	background: ${props => (props.buttonIsOn ? props.theme.colors.green : props.theme.colors.primary)};
		color: ${ props => (props.buttonIsOn ? props.theme.colors.white : props.theme.colors.black)
		};
`;

export default ButtonState;
