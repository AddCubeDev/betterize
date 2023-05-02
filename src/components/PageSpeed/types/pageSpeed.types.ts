export interface PagespeedTestResult {
    performance: number;
    best_practices: number;
    seo: number;
    accessibility: number;
}

export enum EvaluationResult {
    Poor,
    Average,
    Excelent,
}

export type EvaluationResultColors = {
    fill_color: string;
    background_color: string;
};

export type Strategy = "mobile" | "desktop";
export type PagespeedTestResultOrError = PagespeedTestResult | string;
