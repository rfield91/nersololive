import { ClassResultsJson } from "../common/types";
import IndividualClassResults from "./IndividualClassResults";
import ClassLinks from "./ClassLinks";

const ClassResults = ({ results }: ClassResultsJson) => {
    const classes = Object.keys(results);

    const classResults = classes.map((classKey) => {
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
            <ClassLinks classes={classes} />
            <div>{classResults}</div>
        </div>
    );
};

export default ClassResults;
