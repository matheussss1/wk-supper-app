import WKLogo from "../WKLogo";
import styles from "./Header.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<WKLogo />
			<span>Soluções que impulsionam</span>
		</header>
	);
}

export default Header;
