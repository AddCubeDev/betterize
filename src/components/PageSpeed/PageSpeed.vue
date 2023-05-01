<template>
    <div>
        <PageSpeedQuery
            @testStart="onTestStart"
            @testResult="onTestResult"
            @testHasFailed="onTestHasFailed"
        />

        <div :hidden="hiddenPageSpeedTestError">
            <p class="font-bold">{{ pageSpeedTestError }}</p>
        </div>

        <div
            :hidden="hiddenPageSpeedTestResults"
            class="border rounded-md mx-auto bg-black/90 border-gray-200/20 w-full p-4 items-center lg:(w-192)"
        >
            <div class="flex mx-auto pb-4 gap-6 justify-center">
                <p class="font-bold text-[#f90000]">0-40 Poor</p>
                <p class="font-bold text-[#f9f900]">41-89 Average</p>
                <p class="font-bold text-[#00f900]">89-100 Excelent</p>
            </div>

            <div class="gap-x-* grid gap-y-4 grid-cols-2 lg:grid-cols-4">
                <div
                    class="grid gap-y-3 grid-cols-1"
                    v-for="pageSpeedTest in pageSpeedTests"
                >
                    <div class="flex relative items-center justify-center">
                        <p
                            class="font-bold transform top-1/2 left-1/2 text-2xl z-10 -translate-x-1/2 -translate-y-1/2 absolute"
                        >
                            {{ pageSpeedTest.test_result.value }}
                        </p>

                        <div
                            :style="
                                'background-color: ' +
                                getBackgroundColor(
                                    pageSpeedTest.test_result.value
                                )
                            "
                            class="rounded-full h-[120px] w-[120px] absolute"
                        ></div>

                        <circle-progress
                            :percent="pageSpeedTest.test_result.value"
                            :fill-color="
                                getFillColor(pageSpeedTest.test_result.value)
                            "
                            :size="120"
                            :border-width="10"
                            :border-bg-width="10"
                        />
                    </div>
                    <p class="font-medium text-lg">{{ pageSpeedTest.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageSpeedQuery from "./subcomponents/PageSpeedQuery.vue";
import {
    type PagespeedTestResult,
    EvaluationResult,
} from "./types/pageSpeed.types";
import { getEvaluationResult } from "./utils/scores";
import {
    BACKGROUND_GREEN,
    BACKGROUND_RED,
    BACKGROUND_YELLOW,
    FILL_GREEN,
    FILL_RED,
    FILL_YELLOW,
} from "./utils/pageSpeedConstants";
import { ref } from "vue";

const performance = ref(0);
const seo = ref(0);
const accessibility = ref(0);
const best_practices = ref(0);
const hiddenPageSpeedTestResults = ref(true);
const hiddenPageSpeedTestError = ref(true);
const pageSpeedTestError = ref("");

const pageSpeedTests = [
    { label: "Performance", test_result: performance },
    { label: "Seo", test_result: seo },
    { label: "Accessibility", test_result: accessibility },
    { label: "Best practices", test_result: best_practices },
];

function onTestStart() {
    hiddenPageSpeedTestResults.value = true;
    hiddenPageSpeedTestError.value = true;
}

function onTestResult(test_result: PagespeedTestResult) {
    hiddenPageSpeedTestResults.value = false;

    performance.value = test_result.performance;
    seo.value = test_result.seo;
    accessibility.value = test_result.accessibility;
    best_practices.value = test_result.best_practices;
}

function onTestHasFailed(error: string) {
    hiddenPageSpeedTestError.value = false;

    pageSpeedTestError.value = error;
}

function getFillColor(value: number): string {
    let result = getEvaluationResult(value);
    switch (result) {
        case EvaluationResult.Good:
            return FILL_GREEN;
        case EvaluationResult.NeedsImprovement:
            return FILL_YELLOW;
        case EvaluationResult.Poor:
            return FILL_RED;
        default:
            throw new Error(
                `Developer error. getFillColor is missing implementation for EvaluationResult value: ${result}`
            );
    }
}

function getBackgroundColor(value: number): string {
    let result = getEvaluationResult(value);
    switch (result) {
        case EvaluationResult.Good:
            return BACKGROUND_GREEN;
        case EvaluationResult.NeedsImprovement:
            return BACKGROUND_YELLOW;
        case EvaluationResult.Poor:
            return BACKGROUND_RED;
        default:
            throw new Error(
                `Developer error. getBackgroundColor is missing implementation for EvaluationResult value: ${result}`
            );
    }
}
</script>
