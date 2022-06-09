import React, { InputHTMLAttributes, LegacyRef } from "react";

import styles from "./Input.module.scss";

const Input = React.forwardRef(
	(
		{
			placeholder,
			error,
			...props
		}: InputHTMLAttributes<HTMLInputElement> & { error?: string },
		ref
	) => {
		return (
			<div className={styles.inputContainer}>
				<input
					id={props.name}
					placeholder=" "
					{...props}
					ref={ref as LegacyRef<HTMLInputElement>}
				/>
				<label htmlFor={props.name}>{placeholder}</label>
				{error && (
					<small className={styles.formError}>
						<span>{error}</span>
					</small>
				)}
			</div>
		);
	}
);

export default Input;
