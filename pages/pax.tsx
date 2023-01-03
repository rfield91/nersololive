import { ClassResult, PaxResultsJson } from "../common/types";
import PaxResults from "../components/PaxResults";

export async function getServerSideProps() {
    const res = await fetch(process.env.PAX_RESULTS_JSON_URL);
    const json: PaxResultsJson = await res.json();

    return { props: { results: json.results, activePage: "paxResults" } };
}

const Pax = ({ results }: { results: ClassResult[] }) => {
    return <PaxResults results={results} />;
};

export default Pax;
