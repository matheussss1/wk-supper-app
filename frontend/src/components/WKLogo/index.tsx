import logo from "../../media/wk_logo.png";

import styles from "./WKLogo.module.scss";

function WKLogo() {
	return (
		<div className={styles.logoContainer}>
			<img src={logo} />
		</div>
	);
}

export default WKLogo;
