import { useState } from "react";
import type { ClassResult } from "~/app/_common/types";
import RunData from "./run-data";
import RunTimeDisplay from "./run-time-display";

const RallycrossResultEntry = ({ entry }: { entry: ClassResult }) => {
    const [showRuns, setShowRuns] = useState(false);

    const handleToggleRuns = () => {
        setShowRuns(!showRuns);
    };

    return (
        <div
            key={entry.name}
            className={`m-2 cursor-pointer bg-white shadow-lg lg:mx-0 ${
                entry.paxPosition == 1 ? "bg-orange-100" : ""
            }`}
            onClick={handleToggleRuns}
        >
            <div className="grid grid-cols-12 gap-1 rounded-sm">
                <div className="col-span-2 text-center">
                    <div>
                        <div className="text-xs text-slate-600">Class</div>
                        <div>{entry.position}</div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="text-xs">
                        {entry.carClass} #{entry.number}
                    </div>
                    <div className="text-xs">{entry.name}</div>
                    <div className="text-xs text-slate-600">{entry.car}</div>
                    <div className="text-xs text-slate-500">{entry.color}</div>
                </div>
                <div className="col-span-2 text-center">
                    <div>
                        <div className="text-xs text-slate-600">Total</div>
                        <div className="text-sm">
                            {entry.runInfo.rallyCrossTime == null
                                ? "N/A"
                                : entry.runInfo.rallyCrossTime.toFixed(3)}
                        </div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-500">Last</div>
                        <div className="text-sm">
                            {entry.runInfo.runs.length > 0 ? (
                                <RunTimeDisplay
                                    run={
                                        entry.runInfo.runs[
                                            entry.runInfo.runs.length - 1
                                        ]
                                    }
                                />
                            ) : (
                                "N/A"
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 text-center">
                    {entry.runInfo.rallyCrossToFirst &&
                    entry.runInfo.rallyCrossToFirst ? (
                        <>
                            <div className="text-xs text-slate-600">First</div>
                            <div className="text-sm">
                                {entry.runInfo.rallyCrossToFirst
                                    ? entry.runInfo.rallyCrossToFirst.toFixed(3)
                                    : ""}
                            </div>
                            <div className="text-xs text-slate-600">Next</div>
                            <div className="text-sm">
                                {entry.runInfo.rallyCrossToNext
                                    ? entry.runInfo.rallyCrossToNext.toFixed(3)
                                    : ""}
                            </div>
                        </>
                    ) : null}
                </div>
                <div className={`col-span-12 ${showRuns ? "" : "hidden"}`}>
                    <RunData runInfo={entry.runInfo} />
                </div>
            </div>
        </div>
    );
};

export default RallycrossResultEntry;
