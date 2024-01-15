import type { ClassResult } from "~/app/_common/types";
import PaxEntry from "./pax-entry";

const PaxResults = ({ results }: { results: ClassResult[] }) => {
    const entries = results.map((entry) => {
        return <PaxEntry key={entry.name} entry={entry} />;
    });

    return <div>{entries}</div>;
};

export default PaxResults;
