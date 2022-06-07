import { Navigate } from "react-router-dom";

import Cadastro from "../pages/Cadastro";

import FormUsuarios from "../pages/Usuarios/Form";
import Usuarios from "../pages/Usuarios/List";

export const authenticatedRoutes = [
	{
		url: "/usuarios",
		description: "Listagem de usuarios",
		Component: <Usuarios />,
	},
	{
		url: "/usuarios/:id",
		description: "Editar e/ou visualizar usuario",
		Component: <FormUsuarios />,
	},
	{
		url: "*",
		description: "Redirecionar usuario a tela inicial",
		Component: <Navigate to="/usuarios" />,
	},
];

export const unauthenticatedRoutes = [
	{
		url: "/cadastrar",
		description: "Se cadastrar no sistema",
		Component: <Cadastro />,
	},
	{
		url: "*",
		description: "Redirecionar usuario a tela de cadastro",
		Component: <Navigate to="/cadastrar" />,
	},
];
