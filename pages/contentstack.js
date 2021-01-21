import React, { Component } from "react";
import axios from "axios";
import CSPages from "../components/CSPage";

class Contentstack extends Component {
	render() {
		return (
			<>
				<CSPages cs={this.props.cs} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://sauravraw.github.io/company_info_data/contentstack.json"
	);

	return {
		props: {
			cs: data,
		},
	};
};

export default Contentstack;
