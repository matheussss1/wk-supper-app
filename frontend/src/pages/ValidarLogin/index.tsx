import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function ValidarLogin() {
	const { token } = useParams();
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) return;

		(async () => {
			try {
				const response = await fetch(
					"http://localhost:8000/api/login/",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Token ${token}`,
						},
					}
				);

				if (response.status !== 200) throw new Error();

				const nextToken = await response.json();
				setUser({ authenticated: true, nextToken });
			} catch {
				navigate("/");
			}
		})();
	}, [token]);

	return <></>;
}

export default ValidarLogin;
