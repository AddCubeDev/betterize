<template>
    <div class="flex mx-auto pb-4 gap-2 justify-center">
        <input
            id="url"
            type="text"
            name="url"
            class="bg-inherit border rounded-md border-gray-600/50 w-full p-2 text-gray-300 lg:w-96 focus:(border-gray-200/50)"
            v-model="url"
        />

        <button
            id="btnStartTest"
            type="button"
            class="bg-gradient-to-t border-none from-indigo-900 via-indigo-700 to-indigo-800 p-2 px-6 transition text-gray-200 duration-300 capitalize lg:px-12 hover:(shadow-lg shadow-indigo-800) focus:(border-blue-200 border)"
            @click="runTest"
        >
            Run test
        </button>

        <div id="spinner" hidden="true">
            <atom-spinner
                :animation-duration="1500"
                :size="64"
                :color="'white'"
            />
            <span>processing ...</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    runPagespeedTest,
    type PagespeedTestResultOrError,
    type PagespeedTestResult,
} from "../PageSpeed";
import { AtomSpinner } from "epic-spinners";
import { ref } from "vue";

// component properties/events (emits)
// ------------------------------------------------------------------------

interface Emits {
    (event: "testStart"): void;
    (event: "testResult", error: PagespeedTestResult): void;
    (event: "testHasFailed", error: string): void;
}

const emits = defineEmits<Emits>();

const url = ref("https://swiperight.pl");

function runTest() {
    if (!url.value.startsWith("http")) {
        url.value = "https://" + url.value;
    }
    // console.log("start runTest with url=", url.value);

    const urlInput = document.getElementById("url");
    const button = document.getElementById("btnStartTest");
    const spinner = document.getElementById("spinner");
    urlInput.hidden = true;
    button.hidden = true;
    spinner.hidden = false;

    emits("testStart");

    // TODO: change 'prod' to true before deployment
    const prod = false;
    if (prod) {
        // runPagespeedTest(onPagespeedDataLoaded, url.value, "mobile");
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
    const urlInput = document.getElementById("url");
    const button = document.getElementById("btnStartTest");
    const spinner = document.getElementById("spinner");
    urlInput.hidden = false;
    button.hidden = false;
    spinner.hidden = true;

    if (data as PagespeedTestResult) {
        // console.log("emits testResult:", data);
        emits("testResult", data as PagespeedTestResult);
    } else {
        // console.log("emits testHasFailed:", data);
        emits("testHasFailed", data as string);
    }
}
</script>
