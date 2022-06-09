import { useNavigate } from "react-router-dom";
import { FieldValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./Cadastro.module.scss";

import Input from "../../components/Input";
import WKLogo from "../../components/WKLogo";
import Button from "../../components/Button";
import { API_URLS } from "../../routes/api.config";

interface CadastroForm {
	username: string;
	nome: string;
}

const validationSchema = yup.object({
	username: yup
		.string()
		.email("Insira um email válido")
		.required("Campo obrigatório"),
	nome: yup
		.string()
		.required("Campo obrigatório")
		.matches(/[aA-zZ]{3,} [aA-zZ]{3,}/, "Insira o nome completo"),
});

function Cadastro() {
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		setError,
		handleSubmit,
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (formData: FieldValue<CadastroForm>) => {
		(async () => {
			try {
				const response = await fetch(API_URLS.user, {
					method: "POST",
					body: JSON.stringify({
						...(formData as {}),
						password: "!@#Aasd!@#123",
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status === 201) {
					const jsonReponse = await response.json();
					return navigate(`/login/${jsonReponse.token}`);
				}

				if (response.status === 400) {
					return setError("username", {
						message: "Email já cadastrado no sistema.",
					});
				}
			} catch (e) {
				window.alert("Falha ao se comunicar com o servidor");
			}
		})();
	};

	return (
		<main className={styles.wrapper}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={styles.form_cadastro}
			>
				<WKLogo />
				<div className={styles.formInputs}>
					<Input
						placeholder="Email"
						{...register("username")}
						error={errors.username?.message}
					/>
					<Input
						placeholder="Nome"
						{...register("nome")}
						error={errors.nome?.message}
					/>
					<Button>Cadastrar</Button>
				</div>
				<small>
					Para acessar o sistema é necessario um link de acesso único.
					<br />
					Não possui um link?{" "}
					<a href="#">Entre em contato com o suporte ao cliente.</a>
				</small>
			</form>
		</main>
	);
}

export default Cadastro;
