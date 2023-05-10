"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ResultsNavigation = () => {
    const pathname = usePathname();

    const pages = [
        {
            key: "classResults",
            name: "Class",
            link: "/live/class",
        },
        {
            key: "paxResults",
            name: "PAX",
            link: "/live/pax",
        },
        {
            key: "rawResults",
            name: "Raw",
            link: "/live/raw",
        },
    ];

    const links = pages.map((page) => {
        const styles = pathname?.startsWith(page.link)
            ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
            : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

        return (
            <li className="mr-2" key={page.key}>
                <Link className={styles} href={page.link}>
                    {page.name}
                </Link>
            </li>
        );
    });

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">{links}</ul>
        </div>
    );
};

export default ResultsNavigation;
