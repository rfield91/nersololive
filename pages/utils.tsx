import { RunWork, ClassResult, PaxResultsJson } from "../common/types";
import RunProgression from "../components/RunProgression";

export async function getServerSideProps() {
    const res = await fetch(process.env.RUN_WORK_JSON_URL);
    const res2 = await fetch(process.env.PAX_RESULTS_JSON_URL);
    const json: RunWork = await res.json();
    const json2: PaxResultsJson = await res2.json();

    return { props: { runWorkData: json, activePage: "utils", runsData: json2.results } };
}

const UtilsPage = ({
    runWorkData,
    runsData
}: {
    runWorkData: RunWork;
    runsData: ClassResult[];
}) => {

    return (
        <RunProgression runWorkData={runWorkData}
            runsData={runsData} />
    );
};

export default UtilsPage;
