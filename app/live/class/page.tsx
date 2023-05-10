"use client";
import { ClassResultsJson } from "common/types";
import ClassResults from "components/class/ClassResults";

async function getData() {
    const res = await fetch(process.env.NEXT_PUBLIC_CLASS_RESULTS_JSON_URL, {
        next: {
            revalidate: 5,
        },
    });
    const json: ClassResultsJson = await res.json();

    return json;
}

export default async function Page() {
    var data = await getData();

    return <ClassResults results={data.results} />;
}
