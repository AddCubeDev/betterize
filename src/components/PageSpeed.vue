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
            <div class="flex mx-auto gap-6 justify-center">
                <p class="font-bold text-red-600">0-40 Poor</p>
                <p class="font-bold text-yellow-300">41-89 Average</p>
                <p class="font-bold text-[#15ff32cc]">89-100 Excelent</p>
            </div>

            <canvas :id="chartId"></canvas>
        </div>
    </div>
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

function onTestResult(test_result: PagespeedTestResult) {
    const data = [
        { test_type: "PERFORMANCE", count: test_result.performance },
        { test_type: "SEO", count: test_result.seo },
        { test_type: "ACCESIBILITY", count: test_result.accessibility },
        { test_type: "BEST PRACTICES", count: test_result.best_practices },
    ];

    Chart.defaults.color = "#fff";
    Chart.defaults.font.size = 16;
    Chart.defaults.font.weight = "bold";

    chart = new Chart(document.getElementById(chartId), {
        plugins: [ChartDataLabels],
        type: "bar",
        defaults: {
            color: "white",
        },
        data: {
            labels: data.map((row) => row.test_type),
            datasets: [
                {
                    label: "",
                    backgroundColor: data.map((row) =>
                        getBackgroundColor(row.count)
                    ),
                    data: data.map((row) => row.count),
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 10,
                    },
                },
            },

            plugins: {
                colors: {
                    enabled: false,
                },
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
        return "rgba(255, 255, 0, 0.8)";
    }

    // red
    return "rgba(255, 10, 10, 0.8)";
}
</script>
