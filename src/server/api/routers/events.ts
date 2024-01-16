import { z } from "zod";
import {
    getCurrentSeason,
    getEventForCurrentSeason,
    getEventsForCurrentSeason,
} from "~/library/event-results/repository";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const eventsRouter = createTRPCRouter({
    getCurrentSeason: publicProcedure.query(async () => {
        return await getCurrentSeason();
    }),
    getCurrentEvents: publicProcedure.query(async () => {
        return await getEventsForCurrentSeason();
    }),
    getCurrentEvent: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {
            return await getEventForCurrentSeason(input.id);
        }),
});
