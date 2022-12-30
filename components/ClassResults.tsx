import { ClassResult } from "../common/types";
import Link from "next/link";
import ClassResulsEntry from "./ClassResultsEntry";

const ClassResults = ({
    className,
    results,
}: {
    className: string;
    results: ClassResult[];
}) => {
    const entries = results.map((entry) => {
        return (
            <ClassResulsEntry
                entry={entry}
                key={`${entry.name}-${entry.number}`}
            />
        );
    });

    return (
        <div key={className} id={className}>
            <h2 className="cursor-pointer bg-slate-800 p-2 text-center text-lg font-bold tracking-widest text-white">
                <Link href={`#${className}`}>{className}</Link>
            </h2>

            <div className="class-results">{entries}</div>
        </div>
    );
};

export default ClassResults;
