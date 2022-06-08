import React, { useState } from "react";
import { formatCpf, formatPhone } from "../utils/format";

interface useFormField {
	defaultValue?: string,
	type?: 'text' | 'date' | 'email' | 'cpf' | 'phone';
}

const formatOptions: { [key: string]: (value: string) => string } = {
	cpf: (string: string) => formatCpf(string),
	phone: (string: string) => formatPhone(string),
}


function useForm({ defaultValue = "", type = 'text' }: useFormField) {
	const [inputValue, setInputValue] = useState(defaultValue);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		if (!(type in formatOptions)) {
			return setInputValue(value);
		}
		return setInputValue(formatOptions[type](value));
	};

	return {
		onChange: handleInputChange,
		value: inputValue,
	};
}

export default useForm;
