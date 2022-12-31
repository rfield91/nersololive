import { Run } from "../common/types";
import RunTimeDisplay from "./RunTimeDisplay";

const RunDisplay = ({ run }: { run: Run }) => {
    return (
        <div
            className={`basis-1/3 p-2 text-xs ${run.isBest ? "font-bold" : ""}`}
        >
            {run.number}: <RunTimeDisplay run={run} />
        </div>
    );
};

export default RunDisplay;
