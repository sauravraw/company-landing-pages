import React, { Component } from "react";
import { Link } from "next/link";
import styles from "../styles/LandingPage.module.css";

class LandingPage extends Component {
	componentDidMount() {
		document.title = "Landing Page";
	}

	render() {
		// const nav_image  = this.props.landing;
		// console.log(nav);
		// console.log(this.props.landing);

		const { nav_image } = this.props.landing;
		return (
			<div className={styles.mainContainer}>
				<div className={styles.container}>
					<ul>
						{nav_image.map((link) => {
							return (
								<li key={link.title}>
									<a href={link.href}>
										<img
											className={styles.containerimg}
											src={link.url}
											alt={link.title}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default LandingPage;
