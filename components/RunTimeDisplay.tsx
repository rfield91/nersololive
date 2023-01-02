import { Run } from "../common/types";

const RunTimeDisplay = ({ run }: { run: Run }) => {
    if (run.status == "DIRTY")
        return (
            <span>
                {run.time.toFixed(3)}+{run.coneCount}
            </span>
        );

    if (run.status == "CLEAN")
        return <span>{run.time.toFixed(3).toString()}</span>;

    return (
        <span>
            {run.time.toFixed(3)}{" "}
            <span className="text-xs">({run.status})</span>
        </span>
    );
};

export default RunTimeDisplay;
