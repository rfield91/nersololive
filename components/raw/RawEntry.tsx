import { RawResult } from "common/types";

const PaxEntry = ({ entry }: { entry: RawResult }) => {
    return (
        <div className="m-2 lg:mx-0 bg-white shadow-lg">
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-2 text-center">
                    <div className="text-xs text-slate-600">Position</div>
                    <div>{entry.position}</div>
                </div>
                <div className="col-span-6">
                    <div className="text-xs">
                        {entry.entryInfo.carClass} #{entry.entryInfo.number}
                    </div>
                    <div className="text-sm">{entry.entryInfo.name}</div>
                    <div className="text-xs text-slate-600">
                        {entry.entryInfo.car}
                    </div>
                    <div className="text-xs text-slate-500">
                        {entry.entryInfo.color}
                    </div>
                </div>
                <div className="col-span-2 text-center">
                    <div className="text-xs text-slate-600">Raw</div>
                    <div>{entry.total}</div>
                </div>
                <div className="col-span-2 text-center">
                    {entry.toFirst && entry.toNext ? (
                        <>
                            <div className="text-xs text-slate-600">First</div>
                            <div>
                                {entry.toFirst ? entry.toFirst.toFixed(3) : ""}
                            </div>
                            <div className="text-xs text-slate-600">Next</div>
                            <div>
                                {entry.toNext ? entry.toNext.toFixed(3) : ""}
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default PaxEntry;
