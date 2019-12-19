import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { clickButton } from "../../redux/actions";
import ButtonState from "./ButtonState";

const ToggleButton = ({ clickButton, isOn }) => {
	return (
		<ButtonState buttonIsOn={isOn} onClick={() => clickButton()}>
			Toggle
		</ButtonState>
	);
};

const changeState = store => {
	return {
		isOn: store.button.buttonIsOn
	};
};

ToggleButton.propTypes = {
	clickButton: PropTypes.func.isRequired,
	isOn: PropTypes.bool.isRequired
};

export default connect(changeState, { clickButton })(ToggleButton);
