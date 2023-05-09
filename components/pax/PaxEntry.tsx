import { ClassResult } from "common/types";

const PaxEntry = ({ entry }: { entry: ClassResult }) => {
    return (
        <div className="m-2 lg:mx-0 bg-white shadow-lg">
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-2 text-center">
                    <div className="text-xs text-slate-600">PAX</div>
                    <div>{entry.paxPosition}</div>
                    <div className="text-xs text-slate-600">Class</div>
                    <div>{entry.position}</div>
                </div>
                <div className="col-span-6">
                    <div className="text-xs">
                        {entry.carClass} #{entry.number}
                    </div>
                    <div className="text-sm">{entry.name}</div>
                    <div className="text-xs text-slate-600">{entry.car}</div>
                    <div className="text-xs text-slate-500">{entry.color}</div>
                </div>
                <div className="col-span-2 text-center">
                    <div className="text-xs text-slate-600">PAX</div>
                    <div>{entry.runInfo.paxTime}</div>
                    <div className="text-xs text-slate-600">Raw</div>
                    <div>{entry.runInfo.total}</div>
                </div>
                <div className="col-span-2 text-center">
                    {entry.runInfo.toFirstInPax && entry.runInfo.toNextInPax ? (
                        <>
                            <div className="text-xs text-slate-600">First</div>
                            <div>
                                {entry.runInfo.toFirstInPax
                                    ? entry.runInfo.toFirstInPax.toFixed(3)
                                    : ""}
                            </div>
                            <div className="text-xs text-slate-600">Next</div>
                            <div>
                                {entry.runInfo.toNextInPax
                                    ? entry.runInfo.toNextInPax.toFixed(3)
                                    : ""}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default PaxEntry;
