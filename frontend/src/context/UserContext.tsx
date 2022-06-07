import React, { createContext, SetStateAction, useState } from "react";

interface User {
	authenticated: boolean;
	email: string | null;
}

const userInitialState: User = {
	authenticated: false,
	email: null,
};

export const UserContext = createContext<{
	user: User;
	setUser: React.Dispatch<SetStateAction<User>>;
}>({
	user: userInitialState,
	setUser: () => {},
});

export function UserContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [user, setUser] = useState(userInitialState);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
