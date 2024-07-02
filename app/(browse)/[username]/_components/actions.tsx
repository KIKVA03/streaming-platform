"use client";

import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { unfollowUser } from "@/lib/follow-service";
import React, { useId, useTransition } from "react";
import { toast } from "sonner";

type Props = {
    isFollowing: boolean;
    // isBlocked: boolean;
    userId: string;
};

const Actions = ({
    isFollowing,
    userId,
}: // isBlocked
Props) => {
    const [isPending, startTransition] = useTransition();

    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
                .then((data) => toast.success(`You are now following ${data.following.username}`))
                .catch(() => toast.error("Something went wront"));
        });
    };

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) => toast.success(`You have Unfollowed ${data.following.username}`))
                .catch(() => toast.error("Something went wront"));
        });
    };

    const onClick = () => {
        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

    const handleBlock = () => {
        startTransition(() => {
            onBlock(userId)
                .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
                .catch(() => {
                    toast.error(`Something went wrong`);
                });
        });
    };

    // const handleUnblock = () => {
    //     startTransition(() => {
    //         onUnblock(userId)
    //             .then((data) => toast.success(`Unblocked the user ${data.blocked.username}`))
    //             .catch(() => {
    //                 toast.error(`Something went wrong`);
    //             });
    //     });
    // };

    // const onClk = () => {
    //     if (isBlocked) {
    //         handleUnblock();
    //     } else {
    //         handleBlock();
    //     }
    // };

    return (
        <>
            <Button disabled={isPending} onClick={onClick} variant="primary">
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            <Button onClick={handleBlock} disabled={isPending}>
                {/* {isBlocked ? "Unblock" : "Block"} */}
                Block
            </Button>
        </>
    );
};

export default Actions;
