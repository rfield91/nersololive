import Image from "next/image";
import Link from "next/link";
import Navigation from "../_components/live/navigation";

export default function LiveResultsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pages = [
        {
            name: "Class",
            link: "/live/class",
        },
        {
            name: "PAX",
            link: "/live/pax",
        },
        {
            name: "Raw",
            link: "/live/raw",
        },
        {
            name: "Work/Run",
            link: "/live/workrun",
        },
        {
            name: "Utils",
            link: "/live/utils",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="my-2 flex flex-row items-center text-2xl">
                <Link href="/">
                    <Image
                        src={"/ner150.png"}
                        alt="NER Logo"
                        width={50}
                        height={50}
                    />
                </Link>{" "}
                SoloLive
            </div>
            <Navigation pages={pages} />
            {children}
        </section>
    );
}
