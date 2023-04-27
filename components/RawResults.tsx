import { RawResult } from "../common/types";
import RawEntry from "./RawEntry";

const RawResults = ({ results }: { results: RawResult[] }) => {
    const entries = results.map((entry) => {
        return <RawEntry key={entry.entryInfo.name} entry={entry} />;
    });
    return <div>{entries}</div>;
};

export default RawResults;
