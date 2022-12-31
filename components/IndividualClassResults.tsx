import Link from "next/link";
import { ClassResult } from "../common/types";
import ClassResulsEntry from "./ClassResultsEntry";

const IndividualClassResults = ({
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

            <div>{entries}</div>
        </div>
    );
};

export default IndividualClassResults;
