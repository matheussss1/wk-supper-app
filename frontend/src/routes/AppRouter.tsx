import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "../components/Modal";
import { UserContext } from "../context/UserContext";
import useModal from "../hooks/useModal";
import BaseLayout from "../pages/BaseLayout";
import NovaChaveDeAcessoModal from "../pages/Modals/NovaChaveDeAcesso";
import { authenticatedRoutes, unauthenticatedRoutes } from "./config.routes";

function AppRouter() {
	const {
		user: { authenticated },
	} = useContext(UserContext);

	const availableResoures = authenticated
		? authenticatedRoutes
		: unauthenticatedRoutes;

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<BaseLayout />}>
						{availableResoures.map((route) => (
							<Route
								key={route.url}
								path={route.url}
								element={route.Component}
							/>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
			{authenticated && <NovaChaveDeAcessoModal />}
		</div>
	);
}

export default AppRouter;
