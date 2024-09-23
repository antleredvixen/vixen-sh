'use client'

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function TopNav() {
	const { data: session, status } = useSession();

	return (
		<nav className="flex w-full items-center justify-between p-4 text-xl font-semibold bg-[#ff00ff] text-white">
			<Link href="/">vixen.sh</Link>
			<div>
				{status === "loading" ? (
					<span>Loading...</span>
				) : session ? (
					<button
						onClick={() => signOut()}
					>
						sign out
					</button>
				) : (
					<button
						onClick={() => signIn()}
					>
						sign in
					</button>
				)}
			</div>
		</nav>
	);
}