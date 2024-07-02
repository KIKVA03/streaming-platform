"use client";

import { useSidebar } from "@/store/use-sidebar";
import { Follow, User } from "@prisma/client";
import { UserItem, UserItemSkeleton } from "./user-item";

type Props = {
    data: (Follow & { following: User })[];
};

export const Following = ({ data }: Props) => {
    const { collapsed } = useSidebar((state) => state);

    if (!data.length) {
        return null;
    }

    return (
        <div>
            {!collapsed && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">Following</p>
                </div>
            )}
            <ul className="space-y-2 px-2">
                {data.map((follow) => (
                    <UserItem
                        key={follow.following.id}
                        imageUrl={follow.following.imageUrl}
                        username={follow.following.username}
                    />
                ))}
            </ul>
        </div>
    );
};

export const FollowingSkeleton = () => {
    return (
        <ul className="px-2 pt-1 lg:pt-0">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeleton key={i} />
            ))}
        </ul>
    );
};
