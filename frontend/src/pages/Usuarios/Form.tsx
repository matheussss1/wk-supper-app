import { FormEvent, FormEventHandler, useState } from "react";
import Button from "../../components/Button";
import Input, { FormInput, FormInputProps } from "../../components/Input";
import useForm from "../../hooks/useForm";
import styles from "./Form.module.scss";

const fields: FormInputProps[] = [
	{
		useFormConfig: {
			type: "cpf",
			name: "cpf",
			validate: {
				regex: "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
				messageError: "Insira um CPF válido",
			},
		},
		inputConfig: { maxLength: 14, placeholder: "CPF", type: "text" },
	},
	{
		useFormConfig: { type: "phone", name: "phone" },
		inputConfig: { maxLength: 15, placeholder: "Telefone", type: "text" },
	},
	{
		useFormConfig: {
			name: "nome",
			validate: {
				regex: "^[aA-zZ]{3,} [aA-zZ]{3,}",
				messageError: "Insira o nome completo",
			},
		},
		inputConfig: { placeholder: "Nome", type: "text", required: true },
	},
	{
		useFormConfig: { name: "email" },
		inputConfig: { placeholder: "Email", type: "email", required: true },
	},
	{
		useFormConfig: { name: "birthDay" },
		inputConfig: { placeholder: "Nascimento", type: "date" },
	},
];

function FormUsuarios() {
	const [formErrors, setFormErrors] = useState<
		{ name: string; error: string }[]
	>([]);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		const formData = Object.fromEntries(
			new FormData(event.target as HTMLFormElement).entries()
		);
		const errors = [];
		if (formData.email === "a@teste.com") {
			errors.push({ name: "email", error: "Email já cadastrado" });
		}

		setFormErrors(errors);
	};

	return (
		<div className={styles.form_container}>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<h2>Cadastro de usuários</h2>
				{fields.map((field) => (
					<FormInput {...field} formErrors={formErrors} />
				))}
				<Button>Cadastrar</Button>
			</form>
		</div>
	);
}

export default FormUsuarios;
