import { format } from "date-fns";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { api } from "~/trpc/server";
import { HeaderWithBackNav } from "../_components/shared/header-with-back-nav";

export default async function Live() {
    const season = await api.events.getCurrentSeason.query();
    const events = await api.events.getCurrentEvents.query();

    if (season === null)
        return <main>No season available. View past seasons.</main>;

    return (
        <main className="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-8 lg:w-1/2">
            <div className="w-full">
                <HeaderWithBackNav url="/" text={season.seasonName} />
            </div>
            <div className="mx-auto grid w-full grid-cols-1 gap-4 md:gap-8">
                {events.map((ev) => (
                    <Link
                        href={`/results/event/${ev.eventId}/class`}
                        className="flex flex-row items-center justify-between rounded-xl bg-white/10 p-4 hover:bg-white/20"
                        key={ev.eventId}
                    >
                        <div className="flex flex-col gap-1">
                            <h3>{ev.eventName}</h3>
                            <div className="text-xs text-white/60">
                                {format(ev.startDate, "MMMM do")}
                            </div>
                        </div>
                        <div>
                            <FaLongArrowAltRight />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
