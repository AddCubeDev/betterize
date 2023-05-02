import {
    EvaluationResult,
    EvaluationResultColors,
} from "../types/pageSpeed.types";

export const BACKGROUND_GREEN = "#00f90040";
export const BACKGROUND_YELLOW = "#f9f90040";
export const BACKGROUND_RED = "#470000";

export const FILL_GREEN = "#00f900";
export const FILL_YELLOW = "#f9f900";
export const FILL_RED = "#f90000";

export const EvaluationResult2Colors = new Map<
    EvaluationResult,
    EvaluationResultColors
>([
    [
        EvaluationResult.Poor,
        {
            fill_color: FILL_RED,
            background_color: BACKGROUND_RED,
        },
    ],
    [
        EvaluationResult.Average,
        {
            fill_color: FILL_YELLOW,
            background_color: BACKGROUND_YELLOW,
        },
    ],
    [
        EvaluationResult.Excelent,
        {
            fill_color: FILL_GREEN,
            background_color: BACKGROUND_GREEN,
        },
    ],
]);
