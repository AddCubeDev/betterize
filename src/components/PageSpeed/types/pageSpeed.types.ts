export interface PagespeedTestResult {
    performance: number;
    best_practices: number;
    seo: number;
    accessibility: number;
}

export enum EvaluationResult {
    Good,
    NeedsImprovement,
    Poor,
}

export type Strategy = "mobile" | "desktop";
export type PagespeedTestResultOrError = PagespeedTestResult | string;
