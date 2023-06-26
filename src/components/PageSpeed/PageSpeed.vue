<template>
    <div>
        <PageSpeedQuery
            @testStart="onTestStart"
            @testResult="onTestResult"
            @testHasFailed="onTestHasFailed"
            :url="props.url"
            :test="props.test"
            :processing="props.processing"
            :description="props.description"
        />

        <div :hidden="hiddenPageSpeedTestError">
            <p class="font-black">{{ pageSpeedTestError }}</p>
        </div>

        <div
            :hidden="hiddenPageSpeedTestResults"
            class="border rounded-md mx-auto bg-black/90 border-gray-200/20 w-full p-4 items-center lg:(w-192)"
        >
            <div class="flex justify-center gap-6 pb-4 mx-auto">
                <p class="font-black text-[#f90000]">0-49 Poor</p>
                <p class="font-black text-[#f9f900]">50-89 Average</p>
                <p class="font-black text-[#00f900]">90-100 Excelent</p>
            </div>

            <div class="gap-x-* grid gap-y-4 grid-cols-2 lg:grid-cols-4">
                <div
                    class="grid grid-cols-1 gap-y-3"
                    v-for="pageSpeedTest in pageSpeedTests"
                >
                    <div class="relative flex items-center justify-center">
                        <p
                            class="absolute z-10 text-2xl font-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        >
                            {{ pageSpeedTest.test_result.value }}
                        </p>

                        <div
                            :style="`background-color: ${getBackgroundColor(
                                pageSpeedTest.test_result.value
                            )}`"
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
                    <p class="text-lg font-medium">{{ pageSpeedTest.label }}</p>
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
import { EvaluationResult2Colors } from "./utils/pageSpeedConstants";
import { ref } from "vue";

const props = defineProps({
    url: String,
    test: String,
    processing: String,
    description: String,
});

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
    return getFillColorForResult(getEvaluationResult(value));
}

function getFillColorForResult(result: EvaluationResult): string {
    return EvaluationResult2Colors.get(result)?.fill_color;
}

function getBackgroundColor(value: number): string {
    let result = getEvaluationResult(value);

    return EvaluationResult2Colors.get(result)?.background_color;
}
</script>
