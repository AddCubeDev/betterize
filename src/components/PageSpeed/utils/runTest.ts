import type {
    PagespeedTestResultOrError,
    Strategy,
} from "../types/pageSpeed.types";

function adjustScoreValue(score: number): Number {
    return Math.round(score * 100);
}

export function runPageSpeedTest(
    callback: (result: PagespeedTestResultOrError) => void,
    test_url: string,
    strategy: Strategy = "mobile"
): void {
    const query_url = new URL(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
    );

    query_url.searchParams.append("key", import.meta.env.PUBLIC_PAGESPEED);
    query_url.searchParams.append("url", test_url);
    query_url.searchParams.append("category", "performance");
    query_url.searchParams.append("category", "best-practices");
    query_url.searchParams.append("category", "seo");
    query_url.searchParams.append("category", "accessibility");
    query_url.searchParams.append("locale", "pl_PL");
    query_url.searchParams.append("strategy", strategy);

    // Run
    fetch(query_url)
        .then((response) =>
            response.status === 200 ? response.json() : Promise.reject(response)
        )
        .then((json) => {
            const categories = json["lighthouseResult"]["categories"];
            const data = {
                performance: adjustScoreValue(categories["performance"].score),
                best_practices: adjustScoreValue(
                    categories["best-practices"].score
                ),
                seo: adjustScoreValue(categories["seo"].score),
                accessibility: adjustScoreValue(
                    categories["accessibility"].score
                ),
            };

            callback(data);
        })
        .catch((err) => callback(err.statusText))
        .finally();
}

// const data = await runPageSpeedTest("https://invalid.test");
