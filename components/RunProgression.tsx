import { RunWork, ClassResult, HeatProgression } from "../common/types";
import IsToday from "../utils/IsToday";

const RunProgression = ({
    runWorkData: { runWork, timestamp },
    runsData
}: {
    runWorkData: RunWork;
    runsData: ClassResult[];
}) => {

    const heats: { [key: string]: ClassResult[] } = {};

    // strip the novice prefix from classes to include novices in the count
    // Pro is ran in its own group regardless of class
    const getClassName = (data: ClassResult): string => {
        if (data.carClassGroup === 'P') {
            return 'P';
        }
        if (data.carClassGroup === 'N') {
            return data.carClass.slice(1);
        }
        return data.carClass;
    }

    // parse the run data into heat buckets
    Object.entries(runsData).forEach((runs) => {
        const [, data] = runs
        const runHeat = runWork[getClassName(data)]?.run;
        if (!heats[runHeat] && runHeat !== undefined) {
            heats[runHeat] = [];
        }
        if (heats[runHeat]) {
            heats[runHeat].push(runs[1]);
        }
    })

    const heatsRunCounts = Object.entries(heats).map((heat): HeatProgression => {
        const [number, cars] = heat;

        const runCounts: { [key: string]: string[] } = {}
        let maxRuns = 0;
        let totalCompleted = 0;

        cars.forEach((data) => {
            const numberOfRuns = data.runInfo.runs.length;

            if (!runCounts[numberOfRuns]) {
                runCounts[numberOfRuns] = []
            }

            if ((numberOfRuns > maxRuns) && parseInt(data.number) < 100) {
                maxRuns = numberOfRuns;
            }

            totalCompleted += numberOfRuns;

            runCounts[numberOfRuns].push(`${data.number} ${data.carClass}`)
        })

        const totalRuns = maxRuns * cars.length;

        return {
            heat: number,
            runCounts,
            maxRuns,
            totalRuns,
            totalCompleted,
            percentComplete: Math.ceil((totalCompleted / totalRuns) * 100)
        }
    });

    var eventDate = new Date(timestamp);

    if (!IsToday(eventDate)) {
        return (
            <div className="mt-5 mb-5 text-center">
                Utils will be available on the day of the event.
            </div>
        );
    }

    return (
        <div className="mt-5 mb-5">
            {
                heatsRunCounts.map((heat, key) => {
                    const percentComplete = isNaN(heat.percentComplete) ? 0 : heat.percentComplete;
                    return (<div className="pb-7" key={key}>
                        <div className="flex content-center place-content-between">
                            <h5 className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary">
                                Heat {key + 1}
                            </h5>
                            <div>
                                Current Run: <span className="font-bold">{heat.maxRuns}</span>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="bg-blue-600 text-sm font-large text-blue-100 text-center p-2 leading-none rounded-full" style={{ width: `${percentComplete}%` }}> {percentComplete.toFixed(0)}%</div>
                            </div>
                        </div>
                    </div>)
                })
            }
            <div className="text-center">
                <p className="mb-2">
                    Bars show the percentage of drivers for each heat who have completed the current run count.
                </p>
                <p className="mb-2 font-italics">
                    e.g. If the Heat is at the end of their second runs, the percentage will near 100%, when the first driver completes their third run It wil reset the heat percentage to the start and increment the run "Current run"
                </p>
            </div>
        </div>
    );
};

export default RunProgression;
