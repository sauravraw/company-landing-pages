import React, { Component } from "react";
import styles from "../styles/Raw.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const url = "https://login-page-react.vercel.app/";

export class RawComponent extends Component {
	componentDidMount() {
		document.title = "Raw Engineering: Digital Transformation";
	}

	render() {
		const { header, main, footer } = this.props.raw;
		return (
			<div className={styles.container}>
				<header className={styles.headerContainer}>
					<div className={styles.navbar}>
						<div className={styles.logo}>
							<a href="/">
								<img
									className={styles.logoimg}
									src={header[0].logo.url}
									alt="logo"
								/>
							</a>
						</div>
						<div className={styles.navLinks}>
							<ul>
								{header[0].navigation.map((link) => {
									return (
										<li key={link.title}>
											<a href={link.href}>{link.title}</a>
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
					</div>
				</header>
				<main className={styles.mainContainer}>
					<section className={styles.bannerContainer}>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>
								{main[0].banner_section.banner_title}
							</h1>
							<p className={styles.bannerContent}>
								{main[0].banner_section.banner_content}
							</p>
						</div>
						<div className={styles.bannerImage}>
							<img
								src={main[0].banner_section.banner_image}
								alt="banner_image"
							/>
						</div>
					</section>
				</main>
				<footer className={styles.footerContainer}>
					<div className={styles.footer}>
						<div className={styles.footerTop}>
							<h2>{footer[0].cta.heading}</h2>
							<a href={footer[0].cta.link}>{footer[0].cta.title}</a>
						</div>
						<div className={styles.footerBottom}>
							<div className={styles.socialIcons}>
								<ul>
									{footer[0].navigation.map((link) => {
										return (
											<li key={link.title}>
												<a href={link.href}>{link.title}</a>
											</li>
										);
									})}
								</ul>
							</div>
							<div className={styles.privacy}>
								<ul>
									{footer[0].social_links.map((link) => {
										return (
											<li key={link.title}>
												<a href={link.link}>
													<img src={link.url} alt={link.title} />
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className={styles.copyright}>
							<h4>{footer[0].copyright}</h4>
							<img
								src={footer[0].soc_section.url}
								alt={footer[0].soc_section.image_alt}
							/>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default RawComponent;
