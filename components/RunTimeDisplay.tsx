import { Run } from "../common/types";

const RunTimeDisplay = ({ run }: { run: Run }) => {
    let runDisplay = "";

    switch (run.status) {
        case "DIRTY":
            runDisplay = `${run.time.toFixed(3)}+${run.coneCount}`;
            break;
        case "CLEAN":
            runDisplay = run.time.toFixed(3).toString();
            break;
        default:
            runDisplay = `${run.time.toFixed(3)} - ${run.status}`;
    }

    return <>{runDisplay}</>;
};

export default RunTimeDisplay;
