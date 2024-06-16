import React from "react";

type Props = {
    width?: number;
    height?: number;
};

const TwitchLogo = ({ height, width }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 439 512.17"
            width={width ? width : 80}
            height={height ? height : 80}
        >
            <g fillRule="nonzero">
                <path
                    fill="#FEFEFE"
                    d="M402.42 237.79l-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67z"
                />
                <path
                    fill="#7E5AA1"
                    d="M402.42 237.79l-73.17 73.17h-73.17l-64.02 64.02v-64.02h-82.31V36.59h292.67v201.2zM91.46 0L0 91.46v329.25h109.75v91.46l91.46-91.46h73.16L439 256.08V0H91.46z"
                />
                <path
                    fill="#7E5AA1"
                    d="M310.96 210.35h36.58V100.6h-36.58zM210.35 210.35h36.59V100.6h-36.59z"
                />
            </g>
        </svg>
    );
};

export default TwitchLogo;
