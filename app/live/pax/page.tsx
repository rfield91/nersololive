import { PaxResultsJson } from "common/types";
import PaxResults from "components/pax/PaxResults";

async function getData() {
    const res = await fetch(process.env.PAX_RESULTS_JSON_URL, {
        next: {
            revalidate: 10,
        },
    });
    const json: PaxResultsJson = await res.json();

    return json;
}

export default async function Page() {
    const data = await getData();

    return <PaxResults results={data.results} />;
}
