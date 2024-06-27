import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import React from "react";
import Actions from "./_components/actions";
// import { isBlockedByUser } from "@/lib/block-service";

interface Props {
    params: {
        username: string;
    };
}

const UserPage = async ({ params }: Props) => {
    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound();
    }

    const isFollowing = await isFollowingUser(user.id);
    // const isBlocking = await isBlockedByUser(user.id);

    return (
        <div className="flex flex-col gap-y-4">
            <p className="">{user.id}</p>
            <p className="">{user.externalUserId}</p>
            <p className="">{user.username}</p>
            <p className="">{user.imageUrl}</p>
            <p>is following?:{`${isFollowing}`}</p>
            <Actions isFollowing={isFollowing} userId={user.id} />
        </div>
    );
};

export default UserPage;
