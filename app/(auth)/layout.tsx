import React from "react";
import { Logo } from "./_comonents/logo";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className=" h-full flex flex-col items-center justify-center space-y-6">
            <Logo />
            {children}
        </div>
    );
};

export default layout;
