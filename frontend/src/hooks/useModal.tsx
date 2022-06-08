import { useState } from "react";

function useModal(defaultIsOpen = false) {
	const [isOpen, setIsOpen] = useState(defaultIsOpen || false);

	const handleToggleModal = (event: React.MouseEvent) => {
		const isModalContainer =
			(event.target as HTMLDivElement).getAttribute("role") === "dialog";
		return isModalContainer && setIsOpen(!isOpen);
	};

	return {
		onClick: handleToggleModal,
		isOpen,
	};
}

export default useModal;
