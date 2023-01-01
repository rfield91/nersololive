import { ClassResult } from "../common/types";

const PaxEntry = ({ entry }: { entry: ClassResult }) => {
    return (
        <div className="m-2 bg-white shadow-lg">
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-2 text-center">
                    <div className="text-xs text-slate-600">PAX</div>
                    <div>{entry.paxPosition}</div>
                    <div className="text-xs text-slate-600">Class</div>
                    <div>{entry.position}</div>
                </div>
                <div className="col-span-6">
                    <div>
                        {entry.carClass} #{entry.number} - {entry.name}
                    </div>
                    <p className="text-xs text-slate-600">{entry.car}</p>
                    <p className="text-xs text-slate-500">{entry.color}</p>
                </div>
                <div className="col-span-4 text-center">
                    <div className="text-xs text-slate-600">Raw / PAX</div>
                    <div>
                        {entry.runInfo.total} / {entry.runInfo.paxTime}
                    </div>
                    {entry.toFirst ? (
                        <>
                            <div className="text-xs text-slate-600">
                                To First
                            </div>
                            <div>
                                {entry.toFirst ? entry.toFirst.toFixed(3) : ""}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaxEntry;
