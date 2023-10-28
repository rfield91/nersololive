import { ClassResult, ClassResultsJson } from "../common/types";
import ClassResults from "../components/ClassResults";

export async function getServerSideProps() {
    const res = await fetch(process.env.CLASS_RESULTS_JSON_URL);
    const json: ClassResultsJson = await res.json();
    const results = json.results;

    if (process.env.CLASS_RESULT_DISPLAY_MODE) {
        const classes = Object.keys(results);

        classes.forEach((c) => {
            results[c].forEach((entry) => {
                const runInfo = entry.runInfo;

                // Pad missing runs
                if (runInfo.runs.length < process.env.EXPECTED_RUNS) {
                    for (
                        var i = runInfo.runs.length;
                        i < process.env.EXPECTED_RUNS;
                        i++
                    ) {
                        runInfo.runs.push({
                            number: i + 1,
                            status: "CLEAN",
                            time: 100,
                            coneCount: 0,
                            isBest: false,
                        });
                    }
                }

                runInfo.rallyCrossTime = runInfo.runs.reduce(
                    (partialTotal, r) =>
                        partialTotal +
                        (r.status == "DNF"
                            ? r.time + 10
                            : r.time + r.coneCount * 2),
                    0
                );
            });

            results[c].sort(
                (a, b) => a.runInfo.rallyCrossTime - b.runInfo.rallyCrossTime
            );

            for (let i = 0; i < results[c].length; i++) {
                results[c][i].position = (i + 1).toString();

                if (i > 0) {
                    results[c][i].runInfo.rallyCrossToFirst =
                        results[c][i].runInfo.rallyCrossTime -
                        results[c][0].runInfo.rallyCrossTime;
                    results[c][i].runInfo.rallyCrossToNext =
                        results[c][i].runInfo.rallyCrossTime -
                        results[c][i - 1].runInfo.rallyCrossTime;
                }
            }
        });
    }

    return {
        props: {
            results: results,
            activePage: "classResults",
            displayMode: process.env.CLASS_RESULT_DISPLAY_MODE,
            expectedRuns: process.env.EXPECTED_RUNS,
        },
    };
}

type ClassResultsPageProps = {
    results: { [name: string]: ClassResult[] };
    displayMode: "autocross" | "rallycross";
};

const Home = ({ results, displayMode: displayMode }: ClassResultsPageProps) => {
    return <ClassResults results={results} displayMode={displayMode} />;
};

export default Home;
