"use client";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { unfollowUser } from "@/lib/follow-service";
import React, { useId, useTransition } from "react";
import { toast } from "sonner";

type Props = {
    isFollowing: boolean;
    userId: string;
};

const Actions = ({ isFollowing, userId }: Props) => {
    const [isPending, startTransition] = useTransition();
    const handleFollow = () => {
        startTransition(() => {
            onFollow(userId)
                .then((data) => toast.success(`You are now following ${data.following.username}`))
                .catch(() => toast.error("something went wront"));
        });
    };

    const handleUnfollow = () => {
        startTransition(() => {
            onUnfollow(userId)
                .then((data) => toast.success(`You have Unfollowed ${data.following.username}`))
                .catch(() => toast.error("something went wront"));
        });
    };

    const onClick = () => {
        if (isFollowing) {
            handleUnfollow();
        } else {
            handleFollow();
        }
    };

    return (
        <Button disabled={isPending} onClick={onClick} variant="primary">
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
    );
};

export default Actions;
