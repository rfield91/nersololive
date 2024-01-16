import db from "../db";
import type { Season, SeasonEvent } from "./types";

export const getCurrentSeason = async (): Promise<Season | null> => {
    const season = await db.execute(`
SELECT
	seasonId,
    startDate,
    endDate,
    seasonName
FROM
	Seasons 
WHERE
	CURRENT_TIMESTAMP BETWEEN startDate AND endDate`);

    if (season.rows.length === 0) return null;

    return season.rows[0] as Season;
};

export const getEventsForCurrentSeason = async (): Promise<SeasonEvent[]> => {
    const events = await db.execute(`
SELECT
	se.eventId,
	se.seasonId,
	se.startDate,
	se.endDate,
	se.eventName
FROM SeasonEvents se
INNER JOIN Seasons s
	ON se.seasonId = s.seasonId
WHERE
	CURRENT_TIMESTAMP BETWEEN s.startDate and s.endDate`);

    return events.rows as SeasonEvent[];
};

export const getEventForCurrentSeason = async (
    eventId: number,
): Promise<SeasonEvent | null> => {
    const events = await db.execute(
        `
SELECT
	se.eventId,
	se.seasonId,
	se.startDate,
	se.endDate,
	se.eventName
FROM SeasonEvents se
INNER JOIN Seasons s
	ON se.seasonId = s.seasonId
WHERE
	CURRENT_TIMESTAMP BETWEEN s.startDate and s.endDate
AND se.eventId = ?`,
        [eventId],
    );

    if (events.rows.length === 0) return null;

    return events.rows[0] as SeasonEvent;
};
