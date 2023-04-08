import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { PagespeedTestResult } from "../PageSpeed";

export function displayData(chart: Chart, data: PagespeedTestResult) {
    chart.data.datasets[0].data[0] = data.performance;
    chart.data.datasets[0].data[1] = data.seo;
    chart.data.datasets[0].data[2] = data.accessibility;
    chart.data.datasets[0].data[3] = data.best_practices;

    chart.update();
}

export async function createChart() {
    const data = [
        { test_type: "PERFORMANCE", count: 0 },
        { test_type: "SEO", count: 0 },
        { test_type: "ACCESIBILITY", count: 0 },
        { test_type: "BEST PRACTICES", count: 0 },
    ];

    const chart = new Chart(document.getElementById("acquisitions"), {
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
