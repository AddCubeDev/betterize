<template>
    <div class="mx-auto">
        <input
            type="text"
            name="url"
            class="bg-gray-700 text-yellow-400 p-2 w-96"
            v-model="url"
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
