import { InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

function Input({
	placeholder,
	...props
}: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className={styles.inputContainer}>
			<input {...props} placeholder=" " />
			<label>{placeholder}</label>
		</div>
	);
}

export default Input;
