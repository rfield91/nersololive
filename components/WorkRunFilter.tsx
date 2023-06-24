import Link from "next/link";

interface WorkRunFilterProps {
    classes: string[];
    selectedClass: string;
    handleSelectClass: (c: string) => void;
}

const WorkFunFilter = ({
    classes,
    selectedClass,
    handleSelectClass,
}: WorkRunFilterProps) => {
    const showStyle = "bg-blue-500 text-white";
    const hideStyle = "bg-white text-blue-500 border border-blue-500";

    const classLinks = classes.map((c) => {
        return (
            <Link
                key={c}
                href={`#`}
                onClick={() => handleSelectClass(c)}
                className={`${
                    selectedClass === c ? showStyle : hideStyle
                } font-bold col-span-2 m-1 text-center rounded-xl`}
            >
                {c}
            </Link>
        );
    });

    return (
        <div className="bg-white shadow-lg p-2 mt-2">
            <div className="grid grid-cols-12">{classLinks}</div>
        </div>
    );
};

export default WorkFunFilter;
