import { RunInfo } from "../common/types";
import RunDisplay from "./RunDisplay";

const RunData = ({ runInfo }: { runInfo: RunInfo }) => {
    const runs = runInfo.runs.map((run, i) => {
        return <RunDisplay key={i} run={run} />;
    });

    return (
        <div>
            <div className="col-span-12 flex flex-row flex-wrap">{runs}</div>
            <div className="col-span-12 flex flex-row bg-slate-200">
                <div className="basis-1/3 p-2 text-xs text-center">
                    Cones: {runInfo.coneCount}
                </div>
                <div className="basis-1/3 p-2 text-xs text-center">
                    Clean Runs: {runInfo.cleanCount}
                </div>
                <div className="basis-1/3 p-2 text-xs text-center">
                    DNF: {runInfo.dnfCount}
                </div>
            </div>
        </div>
    );
};

export default RunData;
