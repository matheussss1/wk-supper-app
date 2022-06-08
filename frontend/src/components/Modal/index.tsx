import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

interface Modal {
	isOpen: boolean;
	children: React.ReactNode;
	onClick: React.MouseEventHandler;
}

const MODAL_DOM = document.getElementById("modal")!;

function Modal({ isOpen, children, onClick }: Modal) {
	if (!isOpen) return <></>;
	return ReactDOM.createPortal(
		<div className={styles.modal_container} role="dialog" onClick={onClick}>
			<div className={styles.modal_dialog} role="document">
				{children}
			</div>
		</div>,
		MODAL_DOM, 'modal-1'
	);
};

export default Modal;
