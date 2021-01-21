import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/Surfboard.module.css";
const url = "https://login-page-react.vercel.app/";

export class SurfboardComponent extends Component {
	componentDidMount() {
		document.title = "Surfboard Ventures | The Entrepreneur's Zone";
	}

	render() {
		const { header, main, footer } = this.props.surfboard;
		console.log(this.props.surfboard);
		return (
			<div className={styles.container}>
				<div className={styles.scrollup}>
					<a href="#head">
						<img
							src="https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/Up_blue-512.png"
							alt="scroll up"
						/>
					</a>
				</div>
				<header id="head" className={styles.headerContainer}>
					<div className={styles.logo}>
						<a href="/">
							<img src={header[0].logo.url} alt="logo" />
						</a>
					</div>
					<div className={styles.navLinks}>
						<ul>
							{header[0].navigation.map((link) => {
								return (
									<li key={link.title}>
										<a
											className={styles.anchorhover}
											href={link.href}
										>
											{link.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<a href={url}>
						<div className={styles.loginbtn}>Login</div>
					</a>
					<div className={styles.hamburger}>
						<a href={url}>
							<GiHamburgerMenu />
						</a>
					</div>
				</header>
				<main className={styles.mainContainer}>
					<section
						className={styles.bannerContainer}
						style={{
							backgroundImage: `url(${main[0].banner_section.url})`,
						}}
					>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>
								<b>{main[0].banner_section.title}</b>
							</h1>
							<p className={styles.bannerContent}>
								{main[0].banner_section.description}
							</p>
						</div>
					</section>
				</main>
				<footer className={styles.footerContainer}>
					<hr className={styles.hrline} />
					<div className={styles.footer}>
						<div className={styles.footerLinks}>
							<div className={styles.footerLogo}>
								<a href="/">
									<img src={header[0].logo.url} alt="logo" />
								</a>
							</div>
							<div className={styles.nav1}>
								<ul>
									{footer[0].footer_links[0].nav_1.map((link) => {
										return (
											<li key={link.title}>
												<a href={link.href}>{link.title}</a>
											</li>
										);
									})}
								</ul>
							</div>
							<div className={styles.nav2}>
								<ul>
									{footer[0].footer_links[0].nav_2.map((link) => {
										return (
											<li key={link.title}>
												<a href={link.href}>{link.title}</a>
											</li>
										);
									})}
								</ul>
							</div>
							<div className={styles.mail}>
								<p>{footer[0].contact_mail}</p>
							</div>
							<div className={styles.socialMedia}>
								<ul>
									{footer[0].social_media_section.social_media_icons.map(
										(link) => {
											return (
												<li key={link.title}>
													<a href={link.href}>
														<img
															src={link.url}
															alt={link.title}
														/>
													</a>
												</li>
											);
										}
									)}
								</ul>
							</div>
						</div>
						<hr className={styles.hrline} />
						<div className={styles.copyright}>
							<p>{footer[0].copyright_text}</p>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default SurfboardComponent;
