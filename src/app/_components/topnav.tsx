import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold bg-[#ff00ff] text-white">
        <div>vixen.sh</div>

        <SignedOut>
            <SignInButton>
                sign in
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
        </nav>
    );
}