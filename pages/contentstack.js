import React, { Component } from "react";
import axios from "axios";
import CsComponent from "../components/CsComponent";

class Contentstack extends Component {
	render() {
		return (
			<>
				<CsComponent cs={this.props.cs} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://venu-raw.github.io/companyPage_data/contentstack.json"
	);

	return {
		props: {
			cs: data,
		},
	};
};

export default Contentstack;
