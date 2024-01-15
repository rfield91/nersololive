import type { ClassResult, PaxResultsJson } from "~/app/_common/types";
import PaxResults from "~/app/_components/live/pax-results/pax-results";
import { env } from "~/env";

async function getPaxResults(): Promise<ClassResult[] | null> {
    const res = await fetch(env.PAX_RESULTS_JSON_URL);

    if (!res.ok) {
        throw new Error("Could not fetch pax results");
    }

    const resultsJson = (await res.json()) as PaxResultsJson;

    const results = resultsJson.results;

    if (results === undefined) return null;

    return results;
}

export default async function Live() {
    const results = await getPaxResults();

    if (results === null) return <main>No results available.</main>;

    return (
        <main className="mt-4">
            <PaxResults results={results} />
        </main>
    );
}
