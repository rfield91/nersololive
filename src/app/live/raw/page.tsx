import type { RawResult, RawResultsJson } from "~/app/_common/types";
import RawResults from "~/app/_components/live/raw/raw-results";
import { env } from "~/env";

async function getRawResults(): Promise<RawResult[] | null> {
    const res = await fetch(env.RAW_RESULTS_JSON_URL);

    if (!res.ok) {
        throw new Error("Could not fetch pax results");
    }

    const resultsJson = (await res.json()) as RawResultsJson;

    const results = resultsJson.results;

    if (results === undefined) return null;

    return results;
}

export default async function Live() {
    const results = await getRawResults();

    if (results === null) return <main>No results available.</main>;

    return (
        <main className="mt-4">
            <RawResults results={results} />
        </main>
    );
}
