"use client";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";
import Livebadge from "@/components/live-badge";

type Props = {
    username: string;
    imageUrl: string;
    isLive?: boolean;
};

export const UserItem = ({ imageUrl, isLive, username }: Props) => {
    const pathname = usePathname();

    const { collapsed } = useSidebar((state) => state);

    const href = `/${username}`;

    const isActive = pathname === href;

    console.log("pathname maaaaan", pathname);

    return (
        <Button
            variant="ghost"
            asChild
            className={cn(
                "w-full h-12 ",
                collapsed ? "justify-center" : "justify-start",
                isActive && "bg-accent"
            )}
        >
            <Link href={href}>
                <div
                    className={cn(
                        "flex items-center w-full gap-x-4",
                        collapsed && "justify-between"
                    )}
                >
                    <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
                    {!collapsed && <p className="truncate">{username}</p>}
                    {!collapsed && isLive && <Livebadge className="ml-auto" />}
                </div>
            </Link>
        </Button>
    );
};

export const UserItemSkeleton = () => {
    return (
        <li className="flex items-cener gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />

            <div className={"flex-1"}>
                <Skeleton className="h-6" />
            </div>
        </li>
    );
};