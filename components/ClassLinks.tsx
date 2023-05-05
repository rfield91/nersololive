import Link from "next/link";

interface ClassLinksProps {
    classes: string[];
    filteredClasses: string[];
    toggleFilter: (c: string) => void;
    clearFilters: () => void;
}

const ClassLinks = ({
    classes,
    filteredClasses,
    toggleFilter,
    clearFilters,
}: ClassLinksProps) => {
    const noSelected = !filteredClasses.length;
    const showStyle = "bg-blue-500 text-white";
    const hideStyle = "bg-white text-blue-500 border border-blue-500";

    const classLinks = classes.map((c) => {
        const selected = filteredClasses.includes(c);
        return (
            <Link
                key={c}
                href={`#`}
                onClick={() => toggleFilter(c)}
                className={`${
                    selected || noSelected ? showStyle : hideStyle
                } font-bold col-span-2 m-1 text-center rounded-xl`}
            >
                {c}
            </Link>
        );
    });

    return (
        <div className="bg-white shadow-lg p-2 mt-2">
            <div className="grid grid-cols-12">
                {classLinks}
                {!noSelected && (
                    <Link
                        key={`clear`}
                        href={`#`}
                        onClick={clearFilters}
                        className={`bg-orange-500 text-white font-bold col-span-2 col-start-11 m-1 text-center rounded-xl`}
                    >
                        Clear
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ClassLinks;
