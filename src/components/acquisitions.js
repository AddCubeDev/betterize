import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

(async function () {
    const data = [
        { year: "PERFORMANCE", count: 99 },
        { year: "SEO", count: 85 },
        { year: "ACCESIBILITY", count: 100 },
        { year: "BEST PRACTISES", count: 100 },
    ];

    new Chart(document.getElementById("acquisitions"), {
        plugins: [ChartDataLabels],
        type: "bar",
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: "Acquisitions by year",
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
})();
