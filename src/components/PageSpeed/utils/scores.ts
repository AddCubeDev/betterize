/*
    The metrics scores and the perf score are colored according to these ranges:

     0 to  49 (red)   : Poor
    50 to  89 (orange): Needs Improvement
    90 to 100 (green) : Good
*/

import { EvaluationResult } from "../types/pageSpeed.types";

export function getEvaluationResult(value: number): EvaluationResult {
    if (value >= 90) {
        return EvaluationResult.Excelent;
    }

    if (value >= 50) {
        return EvaluationResult.Average;
    }

    return EvaluationResult.Poor;
}

export function getRangeValuesWithLabel(result: EvaluationResult): String {
    switch (result) {
        case EvaluationResult.Poor:
            return "0-49 Poor";
        case EvaluationResult.Average:
            return "50-89 Average";
        case EvaluationResult.Excelent:
            return "90-100 Excelent";
        default:
            throw new Error(
                `Developer error. getRangeValuesWithLabel is missing implementation for EvaluationResult value: ${result}`
            );
    }
}
