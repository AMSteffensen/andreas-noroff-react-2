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
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	let characters = [];

	try {
		const response = await axios.get(BASE_URL);
		const data = response.data;
		// data.results is the array of characters
		characters = data.results;
		console.log(characters);
	} catch (error) {
		console.log(error);
	}

	// the object we return here will become the props in the page component
	return {
		characters: characters
	};
};
