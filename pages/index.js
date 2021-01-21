import React, { Component } from "react";
import LandingPage from "../components/LandingPage";
import axios from "axios";

class Home extends Component {
	render() {
		return (
			<>
				<LandingPage landing={this.props.landing} />
			</>
		);
	}
}

export const getStaticProps = async () => {
	let { data } = await axios.get(
		"https://sauravraw.github.io/company_info_data/landing.json"
	);

	return {
		props: {
			landing: data,
		},
	};
};

export default Home;
