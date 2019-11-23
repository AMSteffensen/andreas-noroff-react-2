import React from "react";
import Link from "next/link";
import Head from "../components/head";

export default function About() {
	return (
		<>
			<Head title="About | Noroff Next" />

			<Link href="/">
				<a>Home</a>
			</Link>
		</>
	);
}
