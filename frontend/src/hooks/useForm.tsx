import React, { useState } from "react";
import { formatCpf, formatPhone } from "../utils/format";

export interface UseFormField {
	defaultValue?: string;
	type?: "text" | "date" | "email" | "cpf" | "phone";
	name: string;
	validate?: ValidateField;
}

export interface ValidateField {
	regex: string;
	messageError: string;
}

const formatOptions: { [key: string]: Function } = {
	cpf: (string: string) => formatCpf(string),
	phone: (string: string) => formatPhone(string),
};

const validateField = (
	string: string,
	{ regex, messageError }: ValidateField
) => {
	if (new RegExp(regex).test(string)) return false;
	return messageError;
};

function useForm({
	defaultValue = "",
	type = "text",
	name,
	validate,
}: UseFormField) {
	const [inputValue, setInputValue] = useState(defaultValue);
	const [error, setError] = useState<boolean | string>(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (!(type in formatOptions)) {
			return setInputValue(value);
		}

		return setInputValue(formatOptions[type](value));
	};

	const validateOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setError(validateField(value, validate!));
	};

	return {
		value: inputValue,
		name,
		error,
		setError,
		onChange: handleInputChange,
		...(validate && { onBlur: validateOnBlur }),
	};
}

export default useForm;
