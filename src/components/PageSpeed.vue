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
} from "../PageSpeed";
import { ref } from "vue";

const url = ref("https://swiperight.pl");

function runTest() {
    console.log("xxx");

    runPagespeedTest(onPagespeedDataLoaded, url.value, "mobile");
}

function onPagespeedDataLoaded(data: PagespeedTestResultOrError) {
    console.log("data:", data);
}
</script>
