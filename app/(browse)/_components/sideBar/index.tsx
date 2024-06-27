import React from "react";
import Wrapper from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import { RecomendedSkeleton, Recommended } from "./recommended";
import { getRecomendedUsers } from "@/lib/recomendedUsers-service";
import { getAllFollowedUsers } from "@/lib/follow-service";
import { Following, FollowingSkeleton } from "./Following";

type Props = {};

export const Sidebar = async (props: Props) => {
    const recommended = await getRecomendedUsers();
    const following = await getAllFollowedUsers();
    return (
        <div>
            <Wrapper>
                <Toggle />
                <div className="space-y-4 pt-4 lg:pt-0">
                    <Following data={following} />
                    <Recommended data={recommended} />
                </div>
            </Wrapper>
        </div>
    );
};

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <ToggleSkeleton />
            <FollowingSkeleton />
            <RecomendedSkeleton />
        </aside>
    );
};
