"use client";

import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "./components/auth/AuthProvider";

export function Providers({ children }) {
	return (
		<NextUIProvider>
			<AuthProvider>{children}</AuthProvider>
		</NextUIProvider>
	);
}
