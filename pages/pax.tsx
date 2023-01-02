import Head from "next/head";
import { ClassResult, PaxResultsJson } from "../common/types";
import PaxResults from "../components/PaxResults";
import ResultsNavigation from "../components/ResultsNavigation";
import ScrollToTop from "../components/ScrollToTop";

export async function getServerSideProps() {
    const res = await fetch(process.env.PAX_RESULTS_JSON_URL);
    const json: PaxResultsJson = await res.json();

    return { props: { results: json.results } };
}

const Pax = ({ results }: { results: ClassResult[] }) => {
    return (
        <div className="bg-slate-200">
            <Head>
                <title>NER SoloLive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResultsNavigation activePage="paxResults" />

            <PaxResults results={results} />

            <ScrollToTop />
        </div>
    );
};

export default Pax;
