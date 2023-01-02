export interface Run {
    number: number;
    status: string;
    time: number;
    coneCount: number;
    isBest: boolean;
}

export interface RunInfo {
    total: number;
    paxTime: number;
    diff?: number;
    cleanCount: number;
    coneCount: number;
    dnfCount: number;
    runs: Run[];
}
export interface ClassResult {
    car: string;
    carClass: string;
    color: string;
    name: string;
    number: string;
    position: string;
    paxPosition: number;
    runInfo: RunInfo;
    toFirst: number;
    toNext: number;
}

export type ClassResultsJson = {
    results: { [name: string]: ClassResult[] };
};

export type PaxResultsJson = {
    results: ClassResult[];
};
