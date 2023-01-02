import Head from "next/head";
import { ClassResultsJson } from "../common/types";
import ClassResults from "../components/ClassResults";
import ResultsNavigation from "../components/ResultsNavigation";
import ScrollToTop from "../components/ScrollToTop";

export async function getServerSideProps() {
    const res = await fetch(process.env.CLASS_RESULTS_JSON_URL);
    const json: ClassResultsJson = await res.json();

    return { props: { results: json.results } };
}

const Home = ({ results }: ClassResultsJson) => {
    return (
        <div className="bg-slate-300">
            <Head>
                <title>NER SoloLive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResultsNavigation activePage="classResults" />

            <ClassResults results={results} />

            <ScrollToTop />
        </div>
    );
};

export default Home;
