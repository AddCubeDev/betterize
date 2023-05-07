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
