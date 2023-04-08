<template>
    <PageSpeedQuery
        @testHasFailed="onTestHasFailed"
        @testResult="onTestResult"
    />

    <div class="mx-auto" style="width: 800px">
        <canvas :id="chartId"></canvas>
    </div>

    <p>Performance test</p>
</template>

<script setup lang="ts">
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import PageSpeedQuery from "@components/PageSpeedQuery.vue";
import { type PagespeedTestResult } from "../PageSpeed";
import { onMounted } from "vue";

const chartId = "chartId";
var chart = null;

// Hooks
onMounted(async () => {
    chart = createChart();
});

function onTestResult(data: PagespeedTestResult) {
    chart.data.datasets[0].data[0] = data.performance;
    chart.data.datasets[0].data[1] = data.seo;
    chart.data.datasets[0].data[2] = data.accessibility;
    chart.data.datasets[0].data[3] = data.best_practices;
    chart.update();
}

function onTestHasFailed(error: string) {
    console.log("test has failed!: ", error);
}

function createChart() {
    const data = [
        { test_type: "PERFORMANCE", count: 0 },
        { test_type: "SEO", count: 0 },
        { test_type: "ACCESIBILITY", count: 0 },
        { test_type: "BEST PRACTICES", count: 0 },
    ];

    const chart = new Chart(document.getElementById(chartId), {
        plugins: [ChartDataLabels],
        type: "bar",
        data: {
            labels: data.map((row) => row.test_type),
            datasets: [
                {
                    label: "Test results by type",
                    backgroundColor: "rgba(21, 255, 50, 0.8)",

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

    return chart;
}
</script>
