import Head from "next/head";
import { ResultsJson } from "../common/types";
import ClassResults from "../components/ClassResults";
import ResultsNavigation from "../components/ResultsNavigation";

export async function getServerSideProps() {
    const res = await fetch(process.env.CLASS_RESULTS_JSON_URL);
    const json: ResultsJson = await res.json();

    return { props: { results: json.results } };
}

const Home = ({ results }: ResultsJson) => {
    return (
        <div className="bg-slate-300">
            <Head>
                <title>NER SoloLive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResultsNavigation activePage="classResults" />

            <ClassResults results={results} />
        </div>
    );
};

export default Home;
