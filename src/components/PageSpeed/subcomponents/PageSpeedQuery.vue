<template>
    <div class="flex flex-col justify-center gap-2 pb-4 mx-auto">
        <div
            ref="speedTestInputDataBlock"
            class="flex flex-col items-center justify-center w-full mx-auto md:w-auto"
        >
            <label
                for="url"
                class="pl-2 mr-auto text-sm font-light text-left text-gray-300"
                >Adres url strony</label
            >
            <div class="flex w-full gap-2 md:w-auto lg:gap-4">
                <input
                    id="url"
                    type="text"
                    name="url"
                    aria-label="adres URL"
                    class="border rounded-md bg-gray-900 border-gray-200 w-full p-2 text-gray-300 lg:w-96 focus:(border-gray-200)"
                    v-model="url"
                />
                <button
                    id="btnStartTest"
                    type="button"
                    class="bg-gradient-to-t border-none rounded-lg from-indigo-900 via-indigo-700 to-indigo-800 p-2 px-6 transition text-gray-200 capitalize lg:px-12 hover:(shadow-lg shadow-indigo-800)"
                    @click="runTest"
                >
                    Testuj
                </button>
            </div>
        </div>

        <div ref="spinner" hidden="true">
            <div class="flex flex-col items-center justify-center">
                <atom-spinner
                    :animation-duration="1500"
                    :size="64"
                    :color="'white'"
                />
                <p>przetwarzanie ...</p>
                <p>zwykle trwa to około 15 sekund</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { runPageSpeedTest } from "../utils/runTest";
import {
    Strategy,
    type PagespeedTestResultOrError,
    type PagespeedTestResult,
} from "../types/pageSpeed.types";
import { AtomSpinner } from "epic-spinners";
import { ref, onMounted } from "vue";

// component properties/events (emits)
// ------------------------------------------------------------------------

interface Emits {
    (event: "testStart"): void;
    (event: "testResult", error: PagespeedTestResult): void;
    (event: "testHasFailed", error: string): void;
}

const emits = defineEmits<Emits>();

// ------------------------------------------------------------------------

onMounted(() => {
    setupDefaultResults();
});

// ------------------------------------------------------------------------

const speedTestInputDataBlock: Ref<HTMLDivElement> = ref(null);
const spinner: Ref<HTMLDivElement> = ref(null);

const url = ref("https://betterize.pl");
function setupDefaultResults() {
    const test_data: PagespeedTestResultOrError = {
        performance: 96,
        seo: 100,
        best_practices: 100,
        accessibility: 100,
    };
    onPagespeedDataLoaded(test_data);
}

function runTest() {
    if (!url.value.startsWith("http")) {
        url.value = "https://" + url.value;
    }
    // console.log("start runTest with url=", url.value);

    speedTestInputDataBlock.value.style.display = "none";
    spinner.value.hidden = false;

    emits("testStart");

    // TODO: change 'prod' to true before deployment
    const prod = true;
    if (prod) {
        runPageSpeedTest(onPagespeedDataLoaded, url.value, "mobile");
    } else {
        // TEST:
        const test_data: PagespeedTestResultOrError = {
            performance: 90,
            seo: 70,
            best_practices: 86,
            accessibility: 30,
        };
        onPagespeedDataLoaded(test_data);
    }
}

function onPagespeedDataLoaded(data: PagespeedTestResultOrError) {
    speedTestInputDataBlock.value.style.display = "";
    spinner.value.hidden = true;

    if ((data as PagespeedTestResult).performance) {
        // console.log("emits testResult:", data);
        emits("testResult", data as PagespeedTestResult);
    } else {
        // console.log("emits testHasFailed:", data);
        emits("testHasFailed", data as string);
    }
}
</script>
