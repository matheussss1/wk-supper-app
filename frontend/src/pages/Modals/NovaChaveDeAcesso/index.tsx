import { useContext } from "react";

import styles from "./NovaChaveDeAcessoModal.module.scss";

import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import { API_URLS } from "../../../routes/api.config";
import ClickToCopy from "../../../components/CopyArea";
import { UserContext } from "../../../context/UserContext";

function NovaChaveDeAcessoModal() {
	const {
		user: { nextToken },
	} = useContext(UserContext);
	const { isOpen, onClick } = useModal(true);

	const url = `${API_URLS.login}/${nextToken!}`;

	return (
		<Modal isOpen={isOpen} onClick={onClick}>
			<div className={styles.container}>
				<h2>Seja bem-vindo!</h2>
				<p>
					Pensando em sua proteção, estamos utilizando o sistema de
					autenticação por link uníco. Para um próximo acesso ao
					sistema, utilize esse novo link abaixo:
				</p>
				<ClickToCopy url={url} />
				<div>
					<small>
						Salve esse link, ao utilizado ele será expirado e então
						recebera um novo.
					</small>
					<br />
					<a href="https://www.dialogando.com.br/inovacao/aplicativos-para-guardar-links-e-noticias">
						Confira também algumas dicas de como armazenar links com
						segurança.
					</a>
				</div>
			</div>
		</Modal>
	);
}

export default NovaChaveDeAcessoModal;
