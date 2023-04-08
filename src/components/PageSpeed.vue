<template>
    <PageSpeedQuery
        @testStart="onTestStart"
        @testResult="onTestResult"
        @testHasFailed="onTestHasFailed"
    />

    <div class="mx-auto w-full h-64 lg:(w-192 h-96) bg-gray-900">
        <canvas :id="chartId"></canvas>
    </div>

    <p>Performance test</p>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import PageSpeedQuery from "@components/PageSpeedQuery.vue";
import { type PagespeedTestResult } from "../PageSpeed";

const chartId = "chartId";
var chart: Chart | undefined = undefined;

function onTestStart() {
    if (chart != undefined) {
        chart.destroy();
    }
}

function onTestResult(rest_result: PagespeedTestResult) {
    const data = [
        { test_type: "PERFORMANCE", count: rest_result.performance },
        { test_type: "SEO", count: rest_result.seo },
        { test_type: "ACCESIBILITY", count: rest_result.accessibility },
        { test_type: "BEST PRACTICES", count: rest_result.best_practices },
    ];

    chart = new Chart(document.getElementById(chartId), {
        plugins: [ChartDataLabels],
        type: "bar",
        data: {
            labels: data.map((row) => row.test_type),
            datasets: [
                {
                    label: "Test results by type",
                    backgroundColor: data.map((row) =>
                        getBackgroundColor(row.count)
                    ),
                    data: data.map((row) => row.count),
                },
            ],
        },
        options: {
            plugins: {
                datalabels: {
                    display: true,
                    color: "#f9fafb",
                    font: {
                        weight: "bold",
                        size: 32,
                    },
                    formatter: function (value, context) {
                        return value;
                    },
                },
            },
        },
    });
}

function onTestHasFailed(error: string) {
    console.log("test has failed!: ", error);
}

function getBackgroundColor(value: number): string {
    if (value > 85) {
        // green
        return "rgba(21, 255, 50, 0.8)";
    }

    if (value > 40) {
        // yeallow
        return "yellow";
    }

    // red
    return "rgba(255, 20, 20, 0.8)";
}
</script>
