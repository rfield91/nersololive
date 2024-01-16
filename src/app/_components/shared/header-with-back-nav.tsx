import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export type HeaderWithBackNavProps = {
    url: string;
    text: string;
};

export function HeaderWithBackNav({ url, text }: HeaderWithBackNavProps) {
    return (
        <div className="grid grid-cols-4 align-middle text-3xl">
            <Link href={url}>
                <FaLongArrowAltLeft className="col-span-1" />
            </Link>
            <h2 className="col-span-2 text-center">{text}</h2>
        </div>
    );
}
