import { Button } from "@/components/ui/button";
import React from "react";
import UrlCard from "./_components/urlCard";
import KeyCard from "./_components/keyCard";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserid } from "@/lib/stream-service";

type Props = {};

const keysPage = async (props: Props) => {
    const self = await getSelf();
    const stream = await getStreamByUserid(self.id);

    if (!stream) {
        throw new Error("Stream not found");
    }
    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Keys & URLs</h1>
                <Button variant="primary">Generate</Button>
            </div>
            <div className="space-y-4">
                <UrlCard value={stream.serverUrl} />
                <KeyCard value={stream.streamKey} />
            </div>
        </div>
    );
};

export default keysPage;
