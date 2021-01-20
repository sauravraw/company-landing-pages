import Link from "next/link";

function Navigation() {
	return (
		<>
			<nav>
				<ul className="nav-ul">
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/RawEng/raw">
							<a>Raw</a>
						</Link>
					</li>
					<li>
						<Link href="/ContentStack/contentstack">
							<a>Contentstack</a>
						</Link>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
					.nav-ul {
						display: flex;
						justify-content: space-around;
					}
				`}
			</style>
		</>
	);
}

export default Navigation;
