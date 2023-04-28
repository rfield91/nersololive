import Link from "next/link";
import React, { Dispatch } from 'react';

interface ClassLinksProps {
    classes: string[],
    filteredClasses: string[],
    setFilteredClasses: Dispatch<((c: string[]) => string[]) | string[]>
}

const ClassLinks = ({ classes, filteredClasses, setFilteredClasses }: ClassLinksProps) => {

    const handleFilteredClasses = (name: string) => {
        setFilteredClasses((current: string[]) => {
            // remove item if it is already in the array, or add if it is not
            const index = current.indexOf(name);
            index === -1 ? current.push(name) : current.splice(index, 1);
            return [...current];
        })
    }

    const noSelected = !filteredClasses.length;
    const showStyle = 'bg-blue-500 text-white';
    const hideStyle = 'bg-white text-blue-500 border border-blue-500';

    const classLinks = classes.map((c) => {
        const selected = filteredClasses.includes(c);
        return (
            <Link
                key={c}
                href={`#`}
                onClick={() => handleFilteredClasses(c)}
                className={`${selected || noSelected ? showStyle : hideStyle} font-bold col-span-2 m-1 text-center rounded-xl`}
            >
                {c}
            </Link>
        );
    });

    return (
        <div className="bg-white shadow-lg p-2 mt-2">
            <div className="grid grid-cols-12">
                {classLinks}
                {!noSelected && <Link
                    key={`clear`}
                    href={`#`}
                    onClick={() => setFilteredClasses([])}
                    className={`bg-orange-500 text-white font-bold col-span-2 col-start-11 m-1 text-center rounded-xl`}
                >
                    Clear
                </Link>}
            </div>
        </div >
    );
};

export default ClassLinks;
