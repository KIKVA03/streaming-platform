import React, { Suspense } from "react";
import NavBar from "./_components/navBar";
import { SideBarSkeleton, Sidebar } from "./_components/sideBar";
import Container from "./_components/container";

type Props = {
    children: React.ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <Suspense fallback={<SideBarSkeleton />}>
                    <Sidebar />
                </Suspense>
                <Container>{children}</Container>
            </div>
        </>
    );
};

export default layout;
