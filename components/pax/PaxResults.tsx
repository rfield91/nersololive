import { ClassResult } from "common/types";
import PaxEntry from "./PaxEntry";

const PaxResults = ({ results }: { results: ClassResult[] }) => {
    const entries = results.map((entry) => {
        return <PaxEntry key={entry.name} entry={entry} />;
    });

    return <div>{entries}</div>;
};

export default PaxResults;
