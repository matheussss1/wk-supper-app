import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { API_URLS } from "../../routes/api.config";

function ValidarLogin() {
	const { token } = useParams();
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) return;

		(async () => {
			try {
				const response = await fetch(`${API_URLS.login}/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${token}`,
					},
				});

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
