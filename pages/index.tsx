import Head from "next/head";
import { ClassResult } from "../common/types";
import ClassLinks from "../components/ClassLinks";
import ClassResults from "../components/ClassResults";

type Results = {
    results: { [name: string]: ClassResult[] };
};

export async function getServerSideProps() {
    const res = await fetch(process.env.RESULTS_JSON_URL);
    const json: Results = await res.json();

    return { props: { results: json.results } };
}

const Home = ({ results }: Results) => {
    const classes = Object.keys(results);

    const classResults = classes.map((classKey) => {
        return (
            <ClassResults
                className={classKey}
                results={results[classKey]}
                key={classKey}
            />
        );
    });

    return (
        <div className="bg-slate-200">
            <Head>
                <title>NER SoloLive</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ClassLinks classes={classes} />
            <div>{classResults}</div>
        </div>
    );
};

export default Home;
