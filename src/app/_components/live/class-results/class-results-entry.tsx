import { DisplayMode, type ClassResult } from "~/app/_common/types";
import AutocrossResultEntry from "./autocross-result-entry";
import RallycrossResultEntry from "./rallycross-result-entry";

const ClassResulsEntry = ({
    entry,
    displayMode,
}: {
    entry: ClassResult;
    displayMode: DisplayMode;
}) => {
    return displayMode == DisplayMode.rallycross ? (
        <RallycrossResultEntry entry={entry} />
    ) : (
        <AutocrossResultEntry entry={entry} />
    );
};

export default ClassResulsEntry;
