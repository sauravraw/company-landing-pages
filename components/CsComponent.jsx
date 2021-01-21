import React, { Component } from "react";
import styles from "../styles/Contentstack.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const url = "https://login-page-react.vercel.app/";

export class CsComponent extends Component {
	render() {
		const { header, main, footer } = this.props.cs;
		return (
			<div className={styles.container}>
				{console.log(this.props.cs)}
				<header className={styles.headerContainer}>
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
				</header>
				<main className={styles.mainContainer}>
					<section
						className={styles.bannerContainer}
						style={{
							backgroundImage: `url(${main[0].banner_section.banner_image.url})`,
						}}
					>
						<div className={styles.banner}>
							<h1 className={styles.bannerTitle}>
								{main[0].banner_section.banner_header}
							</h1>
							<p className={styles.bannerContent}>
								{main[0].banner_section.banner_content}
							</p>
							<div className={styles.cta}>
								<a href={main[0].banner_section.primary_cta.link}>
									{main[0].banner_section.primary_cta.text}
								</a>
								<a href={main[0].banner_section.secondary_cta.link}>
									{main[0].banner_section.secondary_cta.text}
								</a>
							</div>
						</div>
					</section>
				</main>
				<footer className={styles.footerContainer}>
					<div className={styles.footerTop}>
						<div className={styles.footerLogo}>
							<img src={footer[0].footer_logo} alt="footer-logo" />
							<ul className={styles.footerSocial}>
								{footer[0].social_links.map((link) => {
									return (
										<li
											className={styles.footerSocialList}
											key={link.title}
										>
											<a href={link.link}>
												<img src={link.url} alt={link.title} />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.nav1}>
							<ul>
								<li className={styles.navfirst}>
									{footer[0].footer_links[0].title}
								</li>
								{footer[0].footer_links[0].productLinks.map((link) => {
									return (
										<li key={link.title}>
											<a href={link.link}>{link.title}</a>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.nav2}>
							<ul>
								<li className={styles.navfirst}>
									{footer[0].footer_links[1].title}
								</li>
								{footer[0].footer_links[1].usersLinks.map((link) => {
									return (
										<li key={link.title}>
											<a href={link.link}>{link.title}</a>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.nav3}>
							<ul>
								<li className={styles.navfirst}>
									{footer[0].footer_links[2].title}
								</li>
								{footer[0].footer_links[2].educationLinks.map(
									(link) => {
										return (
											<li key={link.title}>
												<a href={link.link}>{link.title}</a>
											</li>
										);
									}
								)}
							</ul>
						</div>
						<div className={styles.nav4}>
							<ul>
								<li className={styles.navfirst}>
									{footer[0].footer_links[3].title}
								</li>
								{footer[0].footer_links[3].companyLinks.map((link) => {
									return (
										<li key={link.title}>
											<a href={link.link}>{link.title}</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className={styles.footerBottom}>
						<ul>
							{footer[0].bottom_links.map((link) => {
								return (
									<li key={link.label}>
										<a href={link.link}>{link.label}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</footer>
			</div>
		);
	}
}

export default CsComponent;
