import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

interface TButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "blue" | "danger";
}

function Button({children, color, ...props }: TButton) {
	const elementStyle = `${styles.btn} ${styles[`btn-${color}`] ?? ""} ${
		props.className ?? ""
	}`;
	return (
		<button {...props} className={elementStyle}>
			{children}
		</button>
	);
}

export default Button;
