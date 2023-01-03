import { ClassResultsJson } from "../common/types";
import ClassResults from "../components/ClassResults";

export async function getServerSideProps() {
    const res = await fetch(process.env.CLASS_RESULTS_JSON_URL);
    const json: ClassResultsJson = await res.json();

    return { props: { results: json.results, activePage: "classResults" } };
}

const Home = ({ results }: ClassResultsJson) => {
    return <ClassResults results={results} />;
};

export default Home;
