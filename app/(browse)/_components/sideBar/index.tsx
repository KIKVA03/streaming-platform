import React from "react";
import Wrapper from "./wrapper";
import Toggle from "./toggle";
import { RecomendedSkeleton, Recommended } from "./recommended";
import { getRecomendedUsers } from "@/lib/recomended-service";

type Props = {};

export const Sidebar = async (props: Props) => {
    const recommended = await getRecomendedUsers();
    return (
        <div>
            <Wrapper>
                <Toggle />
                <div className="space-y-4 pt-4 lg:pt-0">
                    <Recommended data={recommended} />
                </div>
            </Wrapper>
        </div>
    );
};

export const SideBarSkeleton = () => {
    return (
        <aside className="fixed left-0 flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <RecomendedSkeleton />
        </aside>
    );
};