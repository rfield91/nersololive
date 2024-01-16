import { format } from "date-fns";
import Navigation from "~/app/_components/live/navigation";
import { HeaderWithBackNav } from "~/app/_components/shared/header-with-back-nav";
import { api } from "~/trpc/server";

export default async function Page({
    params,
}: {
    params: { id: string; result: string };
}) {
    const eventId = Number.parseInt(params.id);
    const resultType = params.result;

    const ev = await api.events.getCurrentEvent.query({ id: eventId });

    if (ev === null) return <main>Event not found.</main>;

    const pages = [
        {
            name: "Class",
            link: `/results/event/${ev.eventId}/class`,
        },
        {
            name: "PAX",
            link: `/results/event/${ev.eventId}/pax`,
        },
        {
            name: "Raw",
            link: `/results/event/${ev.eventId}/raw`,
        },
    ];

    return (
        <main className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-8 lg:w-1/2">
            <div className="w-full">
                <HeaderWithBackNav url="/results" text={ev.eventName} />
                <div className="mt-2 text-center">
                    {format(ev.startDate, "MMMM, do")}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Navigation pages={pages} />
            </div>
            <div>{resultType}</div>
        </main>
    );
}
