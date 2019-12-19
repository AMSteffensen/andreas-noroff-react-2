import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Name from "./Name";
import Image from "./Image";

export default function ElephantItem({ elephant }) {
	const { name, image, species, sex } = elephant;

	return (
		<Card species={species} sex={sex}>
			<Name>{name}</Name>
			<Image src={image} />
		</Card>
	);
}

ElephantItem.propTypes = {
	elephant: PropTypes.object.isRequired
};
