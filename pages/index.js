import React, { Component } from "react";
import axios from "axios";
// import "../styles/globals.css";
import SurfboardComponent from "../components/SurfboardComponent";

class Surfboard extends Component {
	render() {
		return (
			<>
				<SurfboardComponent surfboard={this.props.surfboard} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://venu-raw.github.io/companyPage_data/surfboard.json"
	);

	return {
		props: {
			surfboard: data,
		},
	};
};

export default Surfboard;
