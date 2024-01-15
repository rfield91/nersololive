import type { RunWork } from "~/app/_common/types";
import { WorkRunOrder } from "~/app/_components/live/work-run/work-run-order";
import { env } from "~/env";

async function getWorkRunData(): Promise<RunWork | null> {
    const res = await fetch(env.RUN_WORK_JSON_URL);

    if (!res.ok) {
        throw new Error("Could not fetch pax results");
    }

    return (await res.json()) as RunWork;
}

export default async function Live() {
    const runWorkData = await getWorkRunData();

    if (runWorkData === null) return <main>Run work data not available.</main>;

    return (
        <main className="mt-4">
            <WorkRunOrder runWork={runWorkData} />
        </main>
    );
}
