import { UserButton } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-9xl">gonjila ylea</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
