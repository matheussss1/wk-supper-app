import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import BaseLayout from "../pages/BaseLayout";
import { authenticatedRoutes, unauthenticatedRoutes } from "./config.routes";

function AppRouter() {
	const {
		user: { authenticated },
	} = useContext(UserContext);

	const availableResoures = authenticated
		? authenticatedRoutes
		: unauthenticatedRoutes;

	return (
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
	);
}

export default AppRouter;
