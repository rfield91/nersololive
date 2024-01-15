import type { RawResult } from "~/app/_common/types";
import RawEntry from "./raw-entry";

const RawResults = ({ results }: { results: RawResult[] }) => {
    const entries = results.map((entry) => {
        return <RawEntry key={entry.entryInfo.name} entry={entry} />;
    });
    return <div>{entries}</div>;
};

export default RawResults;
