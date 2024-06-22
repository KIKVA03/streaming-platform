"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import React, { useState, useEffect } from "react";

type Props = {
    children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
    const [isClient, setIsClient] = useState(false);
    const { collapsed } = useSidebar((state) => state);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;
    return (
        <div>
            <aside
                className={cn(
                    "fixed left-0 flex flex-col ] w-60 h-full bg-background border-r border-[#2D2E35] z-50",
                    collapsed && "w-[70px]"
                )}
            >
                {children}
            </aside>
        </div>
    );
};

export default Wrapper;
