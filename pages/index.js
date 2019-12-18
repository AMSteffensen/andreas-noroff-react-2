import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout/Layout";
import Head from "../components/head";
import axios from "axios";
import { BASE_URL } from "../constants/API";

export default function Index(props) {
	return (
		<Layout>
			<h1>Elephants</h1>
		</Layout>
	);
}

Index.propTypes = {
	elephants: PropTypes.arrayOf(PropTypes.object)
};

Index.getInitialProps = async function() {
	let elephants = [];
	try {
		const headers = {
			"X-Requested-With": "XMLHttpRequest"
		};
		const response = await axios.get(BASE_URL, { headers });
		const data = response.data;
		elephants = data;
		console.log(elephants);
	} catch (error) {
		console.log(error);
	}
	return {
		elephants: elephants
	};
};
