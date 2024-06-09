import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import TwitchLogo from "@/public/TwitchLogo";

const fonts = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-white rounded-full p-3">
                <TwitchLogo />
            </div>
            <div className={cn("flex flex-col items-center", fonts.className)}>
                <p className="text-xl font-semibold">Gamehub</p>
                <p className="text-sm text-muted-foreground">Let&apos;s play</p>
            </div>
        </div>
    );
};
