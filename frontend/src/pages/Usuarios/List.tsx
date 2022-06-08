import Table, {
	TableCell,
	TableHeader,
	TableRow,
} from "../../components/Table";
import styles from "./List.module.scss";

const fakeData = [
	{
		name: "Leanne Graham",
		email: "Sincere@april.biz",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Ervin Howell",
		email: "Shanna@melissa.tv",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Clementine Bauch",
		email: "Nathan@yesenia.net",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Patricia Lebsack",
		email: "Julianne.OConner@kory.org",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Chelsey Dietrich",
		email: "Lucio_Hettinger@annie.ca",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Mrs. Dennis Schulist",
		email: "Karley_Dach@jasper.info",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Kurtis Weissnat",
		email: "Telly.Hoeger@billy.biz",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Nicholas Runolfsdottir V",
		email: "Sherwood@rosamond.me",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Glenna Reichert",
		email: "Chaim_McDermott@dana.io",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
	{
		name: "Clementina DuBuque",
		email: "Rey.Padberg@karina.biz",
		cpf: "000.000.000",
		telefone: "(47) 94144-4438"
	},
];

function ListUsuarios() {
	const hasUsers = fakeData.length;

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
					{!hasUsers && (
						<TableRow>
							<TableCell {...{ colspan: 10 }}>
								{"Nenhum usuário encontrado."}
							</TableCell>
						</TableRow>
					) ||
						fakeData.map((user, index) => (
							<TableRow key={index} >
								<TableCell data-label="Nome">
									{user.name}
								</TableCell>
								<TableCell data-label="Email">
									{user.email}
								</TableCell>
								<TableCell data-label="Documento">
									{user.cpf}
								</TableCell>
								<TableCell data-label="Telefone">
									{user.telefone}
								</TableCell>
							</TableRow>
						))}
				</Table>
			</div>
		</main >
	);
}

export default ListUsuarios;
