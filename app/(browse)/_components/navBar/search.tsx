"use client";
import { useState } from "react";
import qs from "query-string";
import { Search as SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {};

const Search = (props: Props) => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            return;
        }

        const url = qs.stringifyUrl(
            {
                url: "/",
                query: { term: value },
            },
            { skipEmptyString: true }
        );
        router.push(url);
    };
    return (
        <form className="relative w-full lg:w-[400px] flex items-center" onSubmit={onSubmit}>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            <Button type="submit" size={"sm"} variant={"secondary"} className="rounded-l-none">
                <SearchIcon className="h-5 w-5 text-muted-foreground" />
            </Button>
        </form>
    );
};

export default Search;
