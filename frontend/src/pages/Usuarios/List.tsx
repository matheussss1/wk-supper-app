import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table, {
	TableCell,
	TableHeader,
	TableRow,
} from "../../components/Table";
import { API_URLS } from "../../routes/api.config";
import styles from "./List.module.scss";
import { Users } from "./Users";

function ListUsuarios() {
	const navigate = useNavigate();
	const [users, setUsers] = useState<Users[]>([]);
	const hasUsers = users.length;

	const goToForm = (id: number) => navigate(`/usuarios/${id}`);

	useEffect(() => {
		(async () => {
			const response = await fetch(API_URLS.user);

			if (response.status !== 200)
				return alert("Falha ao se comunicar com o servidor");

			return setUsers(await response.json());
		})();
	}, []);

	return (
		<main className={styles.list_container}>
			<div className={styles.table_container}>
				<Table>
					<TableRow>
						<TableHeader>Nome</TableHeader>
						<TableHeader>Email</TableHeader>
						<TableHeader>Documento</TableHeader>
						<TableHeader>Telefone</TableHeader>
					</TableRow>
					{(!users && (
						<TableRow>
							<TableCell {...{ colspan: 10 }}>
								{"Nenhum usuário encontrado."}
							</TableCell>
						</TableRow>
					)) ||
						users.map((user, index) => (
							<TableRow
								key={index}
								onClick={() => goToForm(user.id)}
							>
								<TableCell data-label="Nome">
									{user.nome || "-"}
								</TableCell>
								<TableCell data-label="Email">
									{user.username}
								</TableCell>
								<TableCell data-label="Documento">
									{user.cpf || "-"}
								</TableCell>
								<TableCell data-label="Telefone">
									{user.telefone || "-"}
								</TableCell>
							</TableRow>
						))}
				</Table>
			</div>
		</main>
	);
}

export default ListUsuarios;
