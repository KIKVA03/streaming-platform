import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import TwitchLogo from "@/public/TwitchLogo";
import Link from "next/link";

const fonts = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="bg-white rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
                    <TwitchLogo height={32} width={32} />
                </div>
                <div className={cn("hidden lg:block", fonts.className)}>
                    <p className="text-lg font-semibold">Gamehub</p>
                    <p className="text-xs text-muted-foreground">Creator dashboard</p>
                </div>
            </div>
        </Link>
    );
};