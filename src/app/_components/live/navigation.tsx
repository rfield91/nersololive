"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
    name: string;
    link: string;
};

export default function Navigation({ pages }: { pages: NavigationItem[] }) {
    const pathname = usePathname();

    const navigationItems = pages.map((page) => {
        const styles =
            page.link == pathname
                ? "inline-block p-4 text-white rounded-t-lg border-b-2 border-white active"
                : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-white/50 hover:border-white/50";

        return (
            <li className="mr-2" key={page.link}>
                <Link className={styles} href={page.link}>
                    {page.name}
                </Link>
            </li>
        );
    });
    return (
        <nav className="text-center text-sm font-medium text-white">
            <ol className="-mb-px flex flex-wrap">{navigationItems}</ol>
        </nav>
    );
}
