import React from "react";
import PropTypes from "prop-types";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/API";

export default function Index(props) {
	return (
		<Layout>
			<Head title="Noroff Next" />

			{props.characters.map(character => {
				return <div key={character.id}>{character.name}</div>;
			})}
		</Layout>
	);
}

Index.propTypes = {
	characters: PropTypes.arrayOf(PropTypes.object)
};

Index.getInitialProps = async function() {
	const response = await axios.get(BASE_URL);
	const data = response.data;
	const results = data.results;
	console.log(results);

	return {
		characters: results
	};
};
