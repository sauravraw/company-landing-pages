import React, { Component } from "react";
import axios from "axios";
import SurfboardPage from "../components/SurfboardPage";

class Surfboard extends Component {
	render() {
		return (
			<>
				<SurfboardPage surfboard={this.props.surfboard} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://sauravraw.github.io/company_info_data/surfboard.json"
	);

	return {
		props: {
			surfboard: data,
		},
	};
};

export default Surfboard;
