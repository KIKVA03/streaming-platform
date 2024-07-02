//aq vaketebs useris monacemebis wamoghebas ukve chveni bazidan (cocroachdb dan) clerkis sashualebit

import { currentUser } from "@clerk/nextjs/server";
import db from "./db";

export const getSelf = async () => {
    const self = await currentUser();
    if (!self || !self.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });

    if (!user) {
        throw new Error("not found");
    }
    return user;
};

export const getSeltByUsername = async (username: string) => {
    const self = await getSelf();

    if (!self || !self.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {
            username,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    if (user.username !== self.username) {
        throw new Error();
    }
    return user;
};
