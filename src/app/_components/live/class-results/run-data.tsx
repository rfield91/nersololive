import type { RunInfo } from "~/app/_common/types";
import RunDisplay from "./run-display";

const RunData = ({ runInfo }: { runInfo: RunInfo }) => {
    const runs = runInfo.runs.map((run, i) => {
        return <RunDisplay key={i} run={run} />;
    });

    return (
        <div className="text-black">
            <div className="col-span-12 flex flex-row flex-wrap">{runs}</div>
            <div className="col-span-12 flex flex-row bg-slate-200">
                <div className="basis-1/3 p-2 text-center text-xs">
                    Cones: {runInfo.coneCount}
                </div>
                <div className="basis-1/3 p-2 text-center text-xs">
                    Clean Runs: {runInfo.cleanCount}
                </div>
                <div className="basis-1/3 p-2 text-center text-xs">
                    DNF: {runInfo.dnfCount}
                </div>
            </div>
        </div>
    );
};

export default RunData;
