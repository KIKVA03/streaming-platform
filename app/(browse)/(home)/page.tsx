import { UserButton } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="">dashboard</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
