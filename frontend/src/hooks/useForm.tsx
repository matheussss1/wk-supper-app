import React, { useState } from "react";

function useForm(defaultValue?: string) {
	const [inputValue, setInputValue] = useState(defaultValue || "");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return {
		onChange: handleInputChange,
		value: inputValue,
	};
}

export default useForm;
