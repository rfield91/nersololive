import { ClassResult } from "../common/types";
import AutocrossResultEntry from "./AutocrossResultEntry";
import RallycrossResultEntry from "./RallycrossResultEntry";

const ClassResulsEntry = ({
    entry,
    displayMode,
}: {
    entry: ClassResult;
    displayMode: "autocross" | "rallycross";
}) => {
    if (displayMode == "rallycross") {
        return <RallycrossResultEntry entry={entry} />;
    }

    return <AutocrossResultEntry entry={entry} />;
};

export default ClassResulsEntry;
