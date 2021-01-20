import React, { Component } from "react";
import axios from "axios";
import RawComponent from "../components/RawComponent";

class Raw extends Component {
	render() {
		return (
			<>
				<RawComponent raw={this.props.raw} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://venu-raw.github.io/companyPage_data/raw.json"
	);

	return {
		props: {
			raw: data,
		},
	};
};

export default Raw;
