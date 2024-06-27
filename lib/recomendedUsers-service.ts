import db from "./db";
import { getSelf } from "./auth-service";

export const getRecomendedUsers = async () => {
    let userId;
    try {
        const self = await getSelf();
        userId = self.id;
    } catch {
        userId = null;
    }
    let users = [];

    // aq vfiltravt recomendid userebs rom romlebsac vafolovebt egeni ar wamoighos recomendidebshi da aseve dablokili userebi

    if (userId) {
        users = await db.user.findMany({
            where: {
                AND: [
                    {
                        NOT: {
                            id: userId,
                        },
                    },
                    {
                        NOT: {
                            followedBy: {
                                some: {
                                    followerId: userId,
                                },
                            },
                        },
                    },
                    {
                        NOT: {
                            blocking: {
                                some: {
                                    blockedId: userId,
                                },
                            },
                        },
                    },
                ],
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    } else {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    return users;
};
