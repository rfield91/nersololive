import Link from "next/link";

const ClassLinks = ({ classes }: { classes: string[] }) => {
    const classLinks = classes.map((c) => {
        return (
            <Link
                key={c}
                href={`#${c}`}
                className="bg-blue-500 text-white font-bold col-span-2 m-1 text-center rounded-xl"
            >
                {c}
            </Link>
        );
    });
    return (
        <div className="bg-white shadow-lg p-2">
            <div className="text-center font-bold text-lg p-2">Classes</div>
            <div className="grid grid-cols-12">{classLinks}</div>
        </div>
    );
};

export default ClassLinks;
