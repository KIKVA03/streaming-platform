import { cn } from "@/lib/utils";

interface LiveBadgeProps {
    className?: string;
}

const Livebadge = ({ className }: LiveBadgeProps) => {
    return (
        <div
            className={cn(
                "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide"
            )}
        >
            Live
        </div>
    );
};

export default Livebadge;
