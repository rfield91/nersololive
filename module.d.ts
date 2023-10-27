declare namespace NodeJS {
    export interface ProcessEnv {
        CLASS_RESULTS_JSON_URL: string;
        PAX_RESULTS_JSON_URL: string;
        RAW_RESULTS_JSON_URL: string;
        RUN_WORK_JSON_URL: string;
        CLASS_RESULT_DISPLAY_MODE: "autocross" | "rallycross";
        EXPECTED_RUNS: number;
    }
}
