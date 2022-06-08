import { FormEvent, useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";

import useForm from "../../hooks/useForm";

import { FormInput, FormInputProps } from "../../components/Input";
import WKLogo from "../../components/WKLogo";
import Button from "../../components/Button";

import styles from "./Cadastro.module.scss";

const fields: FormInputProps[] = [
	{
		useFormConfig: { name: "email" },
		inputConfig: { placeholder: "Email", type: "email", required: true },
	},
];

function Cadastro() {
	const { setUser } = useContext(UserContext);
	const [formErrors, setFormErrors] = useState<
		{ name: string; error: string }[]
	>([]);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		const formData: any = Object.fromEntries(
			new FormData(event.target as HTMLFormElement).entries()
		);
		const errors = [];

		if (formData.email === "a@teste.com") {
			errors.push({ name: "email", error: "Email já cadastrado" });
		}

		if (errors.length) return setFormErrors(errors);
		setUser({ authenticated: true, email: formData.email });
	};

	return (
		<main className={styles.wrapper}>
			<form onSubmit={handleFormSubmit} className={styles.form_cadastro}>
				<WKLogo />
				<div className={styles.formInputs}>
					{fields.map((field) => (
						<FormInput {...field} formErrors={formErrors} />
					))}
					<Button>Cadastrar</Button>
				</div>
				<small>
					Para acessar o sistema é necessario um link de acesso único.
					<br />
					Não possui um link?{" "}
					<a href="">Entre em contato com o suporte ao cliente.</a>
				</small>
			</form>
		</main>
	);
}

export default Cadastro;
