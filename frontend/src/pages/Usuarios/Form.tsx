import { FormEvent, useEffect, useState } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { User } from "./Users";
import styles from "./Form.module.scss";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { API_URLS } from "../../routes/api.config";
import { formatCpf, formatPhone } from "../../utils/format";

const validationSchema = yup.object({
	nome: yup
		.string()
		.required("Campo obrigatório")
		.matches(/[aA-zZ]{3,} [aA-zZ]{3,}/, "Insira o nome completo"),
	cpf: yup
		.string()
		.nullable()
		.test("cpf", "Insira um cpf válido", (value) => {
			if (value) {
				const schema = yup
					.string()
					.matches(
						/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/
					);
				return schema.isValidSync(value);
			}
			return true;
		}),
	telefone: yup
		.string()
		.nullable()
		.test("telefone", "Insira o telefone completo", (value) => {
			if (value) {
				return value.length >= 14;
			}

			return true;
		}),
});

function FormUsuarios() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState<User>();
	const defaultValues = {
		cpf: user?.cpf,
		data_nascimento: user?.data_nascimento,
		nome: user?.nome,
		username: user?.username,
		telefone: user?.telefone,
	};
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (formData: FieldValue<FormEvent>) => {
		(async () => {
			try {
				const response = await fetch(`${API_URLS.user}/${id}`, {
					method: "PATCH",
					body: JSON.stringify({
						...(formData as {}),
						password: "!@#Aasd!@#123",
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status === 200) {
					const jsonReponse = await response.json();
					navigate(`/login/${jsonReponse.token}`);
					return alert("Usuario alterado com sucesso.");
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

	const handleDelete = () => {
		if (!id) return;
		(async () => {
			try {
				await fetch(`${API_URLS.user}/${id}`, {
					method: "DELETE",
				});
				alert("Usuario deletado com sucesso");
			} catch {
				alert("Erro ao se conectar com o servidor");
			} finally {
				navigate("/");
			}
		})();
	};

	useEffect(() => {
		if (!id) return;
		(async () => {
			try {
				const response = await fetch(`${API_URLS.user}/${id}`);

				if (response.status === 200) {
					const user = await response.json();
					return setTimeout(() => {
						setUser(user);
					}, 1000);
				}
			} catch {
				alert("Erro ao se conectar com o servidor");
				navigate("/");
			}
		})();
	}, []);

	useEffect(() => reset(defaultValues), [user]);

	return (
		<div className={styles.form_container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2>Edição de usuário</h2>
				{(!user && "Carregando") || (
					<>
						<Input
							placeholder="Nome"
							{...register("nome")}
							error={errors.nome?.message}
						/>
						<Input
							placeholder="Email"
							disabled
							{...register("username")}
							error={errors.username?.message}
						/>
						<Input
							placeholder="CPF"
							{...register("cpf")}
							error={errors.cpf?.message}
							maxLength={14}
							onChange={(e) => {
								e.target.value = formatCpf(e.target.value);
							}}
						/>
						<Input
							placeholder="Telefone"
							{...register("telefone")}
							error={errors.telefone?.message}
							maxLength={15}
							onChange={(e) => {
								e.target.value = formatPhone(e.target.value);
							}}
						/>
						<Input
							placeholder="Data nascimento"
							{...register("data_nascimento")}
							type="date"
							error={errors.data_nascimento?.message}
						/>
						<div>
							<Button>Editar</Button>
							<Button
								color="danger"
								type="button"
								onClick={handleDelete}
							>
								Excluir
							</Button>
							<Button color="blue" onClick={() => navigate("/")}>
								Voltar
							</Button>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

export default FormUsuarios;
