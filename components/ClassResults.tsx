import { useState } from 'react';
import { ClassResultsJson } from "../common/types";
import IndividualClassResults from "./IndividualClassResults";
import ClassLinks from "./ClassLinks";

const ClassResults = ({ results }: ClassResultsJson) => {
    const classes = Object.keys(results);
    // const store: string = window.localStorage?.getItem('filteredClasses') || ''
    // const storedFilterClasses: string[] = store ? JSON.parse(store) : [];
    const [filteredClasses, setFilteredClasses] = useState<string[]>([])

    const classResults = classes.map((classKey) => {
        // hide elements that are not selected filters
        if (filteredClasses.length > 0 && !filteredClasses.includes(classKey)) {
            return '';
        }
        return (
            <IndividualClassResults
                className={classKey}
                results={results[classKey]}
                key={classKey}
            />
        );
    });

    return (
        <div>
            <ClassLinks classes={classes} filteredClasses={filteredClasses} setFilteredClasses={setFilteredClasses} />
            <div>{classResults}</div>
        </div>
    );
};

export default ClassResults;
