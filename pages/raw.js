import React, { Component } from "react";
import axios from "axios";
import RawPage from "../components/RawPage";

class Raw extends Component {
	render() {
		return (
			<>
				<RawPage raw={this.props.raw} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://sauravraw.github.io/company_info_data/raw.json"
	);

	return {
		props: {
			raw: data,
		},
	};
};

export default Raw;
