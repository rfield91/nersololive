import Head from "next/head";
import ResultsNavigation from "../components/ResultsNavigation";

const PaxResults = () => {
    return (
        <div className="bg-slate-200">
            <Head>
                <title>NER SoloLive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResultsNavigation activePage="paxResults" />
        </div>
    );
};

export default PaxResults;
