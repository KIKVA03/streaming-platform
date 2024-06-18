import React from "react";
import NavBar from "./_components/navBar";
import Sidebar from "./_components/sideBar";
import Container from "./_components/container";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <Sidebar />
                <Container>{children}</Container>
            </div>
        </>
    );
};

export default layout;
