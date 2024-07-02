import { getSeltByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import NavBar from "./_components/navBar";
import Sidebar from "./_components/sidebar";
import Container from "./_components/container";
type Props = {
    params: {
        username: string;
    };
    children: React.ReactNode;
};

const CreatorLayout = async ({ children, params }: Props) => {
    const self = await getSeltByUsername(params.username);

    if (!self) {
        redirect("/");
    }

    return (
        <>
            <NavBar />
            <div className="h-full flex pt-20">
                <Sidebar />
                <Container>{children}</Container>
            </div>
        </>
    );
};

export default CreatorLayout;
