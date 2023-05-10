import { RawResultsJson } from "common/types";
import RawResults from "components/raw/RawResults";

async function getData() {
    const res = await fetch(process.env.RAW_RESULTS_JSON_URL, {
        next: {
            revalidate: 10,
        },
    });
    const json: RawResultsJson = await res.json();

    return json;
}

export default async function Page() {
    const data = await getData();

    return <RawResults results={data.results} />;
}
