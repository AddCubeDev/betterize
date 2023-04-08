<template>
    <div class="mx-auto">
        <input
            type="text"
            name="url"
            class="bg-gray-700 text-yellow-400 p-2 w-96"
            :value="url"
        />

        <button
            type="button"
            class="bg-gray-700 text-yellow-400 p-2"
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
    (event: "testHasFailed", error: string): void;
    (event: "testResult", error: PagespeedTestResult): void;
}

const emits = defineEmits<Emits>();

const url = ref("https://swiperight.pl");

function runTest() {
    console.log("start runTest ...");

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
