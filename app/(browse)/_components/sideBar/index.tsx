import React from "react";
import Wrapper from "./wrapper";
import Toggle from "./toggle";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div>
            <Wrapper>
                <Toggle />
            </Wrapper>
        </div>
    );
};

export default Sidebar;
