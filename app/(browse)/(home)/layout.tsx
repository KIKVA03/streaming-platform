import React from "react";
import NavBar from "../_components/navBar";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">{children}</div>
        </>
    );
};

export default layout;
