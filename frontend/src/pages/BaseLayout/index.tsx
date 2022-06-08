import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import Header from "../../components/Header";

function BaseLayout() {
	const {
		user: { authenticated },
	} = useContext(UserContext);

	if (!authenticated) return <Outlet />;

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default BaseLayout;
