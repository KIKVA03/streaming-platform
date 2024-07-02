"use client";

import React from "react";
import Hint from "@/components/hint";

import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

type Props = {};

const Toggle = (props: Props) => {
    const { collapsed, onCollapse, onExpand } = useCreatorSidebar((state) => state);

    const label = collapsed ? "Expent" : "Collapse";

    return (
        <>
            {collapsed && (
                <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
                    <p className="font-semibold text-primary">Dshboard</p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onCollapse}
                            variant="ghost"
                            size={"sm"}
                            className="h-auto p-2"
                        >
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    );
};

export default Toggle;
