"use client";

import { onFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import React, { useId, useTransition } from "react";
import { toast } from "sonner";

type Props = {
    isFollowing: boolean;
    userId: string;
};

const Actions = ({ isFollowing, userId }: Props) => {
    console.log("user id that i want to follow", userId);
    const [isPending, startTransition] = useTransition();
    const onClick = () => {
        startTransition(() => {
            console.log("es functionshi", useId);
            onFollow(userId)
                .then((data) => toast.success(`You are now following ${data.following.username}`))
                .catch(() => toast.error("something went wront"));
        });
    };
    return (
        <Button disabled={isFollowing || isPending} onClick={onClick} variant="primary">
            Follow
        </Button>
    );
};

export default Actions;
