import { useState } from "react";
import { ClassResult } from "../common/types";

const ClassResulsEntry = ({ entry }: { entry: ClassResult }) => {
    const [showRuns, setShowRuns] = useState(false);

    const handleToggleRuns = (e: any) => {
        setShowRuns(!showRuns);
    };

    return (
        <div
            key={entry.name}
            className={`cursor-pointer m-2 bg-white shadow-lg ${
                entry.paxPosition == 1 ? "bg-orange-100" : ""
            }`}
            onClick={handleToggleRuns}
        >
            <div className="grid grid-cols-12 gap-1 space-x-2 rounded-sm">
                <div className="col-span-2 text-center">
                    <div>
                        <div className="text-xs text-slate-600">Class</div>
                        <div>{entry.position}</div>
                        <div>
                            <div className="text-xs text-slate-600">PAX</div>
                            <div>{entry.paxPosition}</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div>
                        #{entry.number} - {entry.name}
                    </div>
                    <p className="text-xs text-slate-600">{entry.car}</p>
                    <p className="text-xs text-slate-500">{entry.color}</p>
                </div>
                <div className="col-span-4 text-center">
                    <div>
                        <div className="text-xs text-slate-600">Best</div>
                        <div>{entry.runInfo.total}</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-500">Last</div>
                        <div>
                            {entry.runInfo.runs.length > 0
                                ? entry.runInfo.runs[
                                      entry.runInfo.runs.length - 1
                                  ].time
                                : "N/A"}
                        </div>
                    </div>
                </div>
                <div
                    className={`run-info col-span-12 flex flex-row flex-wrap ${
                        showRuns ? "" : "hidden"
                    }`}
                >
                    {entry.runInfo.runs.map((run, i) => {
                        return (
                            <div
                                key={i}
                                className={`basis-1/3 p-2 text-xs ${
                                    run.isBest ? "font-bold" : ""
                                }`}
                            >
                                Run {i + 1}: {run.time}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ClassResulsEntry;
