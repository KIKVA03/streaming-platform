import db from "./db";
import { getSelf } from "./auth-service";

export const isBlockedByUser = async (id: string) => {
    try {
        const self = await getSelf();
        const otherUser = await db.user.findUnique({
            where: { id },
        });

        if (!otherUser) {
            throw new Error("USER NOT FOUND");
        }
        if (otherUser.id === self.id) {
            return false;
        }

        const existingBlock = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockerId: self.id,
                    blockedId: otherUser.id,
                },
            },
        });

        return !!existingBlock;
    } catch {
        return false;
    }
};

export const blockUser = async (id: string) => {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
        where: { id },
    });

    if (!otherUser) {
        throw new Error("USER NOT FOUND");
    }

    if (otherUser.id === self.id) {
        throw new Error("Can not block yourself");
    }

    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id,
            },
        },
    });

    if (!!existingBlock) {
        throw new Error("Already blocked");
    }

    const blockUser = await db.block.create({
        data: {
            blockerId: self.id,
            blockedId: otherUser.id,
        },
        include: {
            blocked: true,
        },
    });

    return blockUser;
};

export const unblockUser = async (id: string) => {
    const self = await getSelf();
    const otherUser = await db.user.findUnique({
        where: { id },
    });

    if (!otherUser) {
        throw new Error("USER NOT FOUND");
    }

    if (otherUser.id === self.id) {
        throw new Error("Can not unblock yourself");
    }

    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id,
            },
        },
    });

    if (!existingBlock) {
        throw new Error("not blocked");
    }

    const unblockUser = await db.block.delete({
        where: {
            id: existingBlock.id,
        },
        include: {
            blocked: true,
        },
    });

    return unblockUser;
};
