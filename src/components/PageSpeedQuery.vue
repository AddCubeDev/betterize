<template>
    <div class="flex mx-auto pb-4 gap-2 justify-center">
        <div class="flex flex-col mx-auto w-full items-center md:w-auto">
            <label
                for="url"
                class="font-light mr-auto text-left text-sm pl-2 text-gray-500"
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

        <div id="spinner" hidden="true">
            <div class="flex flex-col items-center">
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
    const prod = true;
    if (prod) {
        runPagespeedTest(onPagespeedDataLoaded, url.value, "mobile");
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

    if ((data as PagespeedTestResult).performance) {
        // console.log("emits testResult:", data);
        emits("testResult", data as PagespeedTestResult);
    } else {
        // console.log("emits testHasFailed:", data);
        emits("testHasFailed", data as string);
    }
}
</script>
