import { RawResult, RawResultsJson } from "../common/types";
import RawResults from "../components/RawResults";

export async function getServerSideProps() {
    const res = await fetch(process.env.RAW_RESULTS_JSON_URL);
    const json: RawResultsJson = await res.json();

    return { props: { results: json.results, activePage: "rawResults" } };
}

const Raw = ({ results }: { results: RawResult[] }) => {
    return <RawResults results={results} />;
};

export default Raw;
