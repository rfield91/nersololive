import { ClassResult } from "../common/types";
import IndividualClassResults from "./IndividualClassResults";
import ClassLinks from "./ClassLinks";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ClassResultsProps = {
    results: { [name: string]: ClassResult[] };
    displayMode: "autocross" | "rallycross";
};

const ClassResults = ({ results, displayMode }: ClassResultsProps) => {
    const classes = Object.keys(results);

    // const [filteredClasses, setFilteredClasses] = useState<string[]>([]);
    const defaultClasses: string[] = [];
    const [filteredClasses, setFilteredClasses] = useLocalStorage<string[]>(
        "filteredClasses",
        defaultClasses
    );

    const handleFilteredClasses = (toggleClass: string) => {
        const classesToUpdate = [...filteredClasses];

        // remove item if it is already in the array, or add if it is not
        const index = classesToUpdate.indexOf(toggleClass);
        index === -1
            ? classesToUpdate.push(toggleClass)
            : classesToUpdate.splice(index, 1);

        setFilteredClasses(classesToUpdate);
    };

    const clearFilteredClasses = () => {
        setFilteredClasses([]);
    };

    const classResults = classes.map((classKey) => {
        // hide elements that are not selected filters
        if (filteredClasses.length > 0 && !filteredClasses.includes(classKey)) {
            return "";
        }
        return (
            <IndividualClassResults
                className={classKey}
                results={results[classKey]}
                key={classKey}
                displayMode={displayMode}
            />
        );
    });

    return (
        <div>
            <ClassLinks
                classes={classes}
                filteredClasses={filteredClasses}
                toggleFilter={handleFilteredClasses}
                clearFilters={clearFilteredClasses}
            />
            <div>{classResults}</div>
        </div>
    );
};

export default ClassResults;
