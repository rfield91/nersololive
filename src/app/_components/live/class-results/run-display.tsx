import type { Run } from "~/app/_common/types";
import RunTimeDisplay from "./run-time-display";

const RunDisplay = ({ run }: { run: Run }) => {
    return (
        <div
            className={`basis-1/3 p-2 text-xs lg:basis-1/6 ${
                run.isBest ? "font-bold" : ""
            }`}
        >
            {run.number}: <RunTimeDisplay run={run} />
        </div>
    );
};

export default RunDisplay;
