export interface Run {
    number: number;
    time: string;
    isBest: boolean;
}

export interface RunInfo {
    total: string;
    paxTime: string;
    diff: string;
    runs: Run[];
}
export interface ClassResult {
    car: string;
    carClass: string;
    color: string;
    name: string;
    number: string;
    position: number;
    paxPosition: number;
    runInfo: RunInfo;
}
