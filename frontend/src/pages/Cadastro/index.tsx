import { FormEvent, useState } from "react";
import { FormInput, FormInputProps } from "../../components/Input";
import WKLogo from "../../components/WKLogo";
import Button from "../../components/Button";

import styles from "./Cadastro.module.scss";
import { useNavigate } from "react-router-dom";

const fields: FormInputProps[] = [
	{
		useFormConfig: { name: "username" },
		inputConfig: { placeholder: "Email", type: "email", required: true },
	},
];

function Cadastro() {
	const navigate = useNavigate();
	const [formErrors, setFormErrors] = useState<
		{ name: string; error: string }[]
	>([]);

	const handleFormSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const formData: any = {
			...Object.fromEntries(
				new FormData(event.target as HTMLFormElement).entries()
			),
			password: "c#123!!@_+=Y09llOi@",
		};

		try {
			const response = await fetch("http://localhost:8000/api/user/", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.status === 201) {
				const jsonReponse = await response.json();
				return navigate(`/login/${jsonReponse.token}`);
			}

			if (response.status === 400) {
				return setFormErrors([
					{
						name: "username",
						error: "Email já cadastrado no sistema",
					},
				]);
			}
			throw new Error();
		} catch (e) {
			window.alert("Falha ao se comunicar com o servidor");
		}
	};

	return (
		<main className={styles.wrapper}>
			<form onSubmit={handleFormSubmit} className={styles.form_cadastro}>
				<WKLogo />
				<div className={styles.formInputs}>
					{fields.map((field) => (
						<FormInput
							{...field}
							key={field.useFormConfig.name}
							formErrors={formErrors}
						/>
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
