<template>
    <div>
        <PageSpeedQuery
            @testStart="onTestStart"
            @testResult="onTestResult"
            @testHasFailed="onTestHasFailed"
        />

        <div
            class="bg-transparent border rounded-md mx-auto border-gray-200/20 h-64 w-full lg:(w-192 h-96)"
        >
            <div class="flex mx-auto gap-6 justify-center pb-4">
                <p class="font-bold text-red-600">0-40 Poor</p>
                <p class="font-bold text-yellow-300">41-89 Average</p>
                <p class="font-bold text-[#15ff32cc]">89-100 Excelent</p>
            </div>

            <div
                class="grid grid-cols-2 lg:grid-cols-4 gap-x-* gap-y-4 justify-items-center"
            >
                <div
                    class="grid grid-cols-1 gap-y-3"
                    v-for="pageSpeedTest in pageSpeedTests"
                >
                    <div class="relative items-center justify-center flex">
                        <p
                            class="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold"
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
                            class="absolute w-[120px] h-[120px] rounded-full"
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
                    <p class="font-bold text-lg">{{ pageSpeedTest.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

import PageSpeedQuery from "@components/PageSpeedQuery.vue";
import { type PagespeedTestResult } from "../PageSpeed";

import { ref } from "vue";

const performance = ref(0);
const seo = ref(0);
const accessibility = ref(0);
const best_practices = ref(0);

const pageSpeedTests = [
    { label: "Performance", test_result: performance },
    { label: "Seo", test_result: seo },
    { label: "Accessibility", test_result: accessibility },
    { label: "Best practices", test_result: best_practices },
];

function onTestStart() {}

function onTestResult(test_result: PagespeedTestResult) {
    performance.value = test_result.performance;
    seo.value = test_result.seo;
    accessibility.value = test_result.accessibility;
    best_practices.value = test_result.best_practices;
}

function onTestHasFailed(error: string) {
    console.log("test has failed!: ", error);
}

function getFillColor(value: number): string {
    if (value > 85) {
        // green
        return "rgba(21, 255, 50, 0.8)";
    }

    if (value > 40) {
        // yeallow
        return "rgba(255, 255, 0, 0.8)";
    }

    // red
    return "rgba(255, 10, 10, 0.8)";
}

function getBackgroundColor(value: number): string {
    if (value > 85) {
        // green
        return "#15ff3299";
    }

    if (value > 40) {
        // yeallow
        return "#ffff0066";
    }

    // red
    return "#ff0a0a66";
}
</script>
