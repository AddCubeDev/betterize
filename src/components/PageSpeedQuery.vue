<template>
    <div class="flex mx-auto pb-4 gap-2 justify-center">
        <input
            type="text"
            name="url"
            class="bg-inherit border rounded-md border-gray-600/50 w-full p-2 text-gray-300 lg:w-96 focus:(border-gray-200/50)"
            v-model="url"
        />

        <button
            type="button"
            class="bg-gradient-to-t border-none from-indigo-900 via-indigo-700 to-indigo-800 p-2 px-6 transition text-gray-200 duration-300 capitalize lg:px-12 hover:(shadow-lg shadow-indigo-800) focus:(border-blue-200 border)"
            @click="runTest"
        >
            Run test
        </button>
    </div>
</template>

<script setup lang="ts">
import {
    runPagespeedTest,
    type PagespeedTestResultOrError,
    type PagespeedTestResult,
} from "../PageSpeed";
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
    console.log("start runTest with url=", url.value);

    emits("testStart");
    runPagespeedTest(onPagespeedDataLoaded, url.value, "mobile");
}

function onPagespeedDataLoaded(data: PagespeedTestResultOrError) {
    if (data as PagespeedTestResult) {
        console.log("emits testResult:", data);
        emits("testResult", data as PagespeedTestResult);
    } else {
        console.log("emits testHasFailed:", data);
        emits("testHasFailed", data as string);
    }
}
</script>
