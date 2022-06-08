import { FormEvent, useContext } from "react";

import { UserContext } from "../../context/UserContext";

import useForm from "../../hooks/useForm";

import Input from "../../components/Input";
import WKLogo from "../../components/WKLogo";
import Button from "../../components/Button";

import styles from "./Cadastro.module.scss";

function Cadastro() {
	const emailRef = useForm("teste@teste.com");
	const passwordRef = useForm("teste@teste.com");
	const { setUser } = useContext(UserContext);

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		setUser({
			authenticated: true,
			email: emailRef.value,
		});
	};

	return (
		<main className={styles.wrapper}>
			<form onSubmit={handleFormSubmit} className={styles.form_cadastro}>
				<WKLogo />
				<div className={styles.formInputs}>
					<Input
						type="email"
						name="email"
						placeholder="E-mail"
						required
						{...emailRef}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Senha"
						required
						{...passwordRef}
					/>
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
