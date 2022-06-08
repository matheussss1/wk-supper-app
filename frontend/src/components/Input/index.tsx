import React, { InputHTMLAttributes, useEffect, useState } from "react";
import useForm, { UseFormField } from "../../hooks/useForm";

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

export interface FormInputProps {
	useFormConfig: UseFormField;
	inputConfig: React.ComponentProps<typeof Input>;
	formErrors?: { name: string; error: string }[];
}

export function FormInput({
	useFormConfig,
	inputConfig,
	formErrors,
}: FormInputProps) {
	const [isError, setIsError] = useState(false);
	const { error, setError, ...restUseFormConfig } = useForm(useFormConfig);
	const formError = formErrors
		?.filter((formError) => formError.name === useFormConfig.name)
		.shift();

	useEffect(() => {
		if (!error) setIsError(false);

		if (formError) {
			return setIsError(true);
		}

		return setIsError(true);
	}, [error, formErrors]);

	return (
		<>
			<Input {...inputConfig} {...restUseFormConfig} />
			{isError && (
				<small className={styles.formError}>
					<span>{error || formError?.error}</span>
				</small>
			)}
		</>
	);
}
