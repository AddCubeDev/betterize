export interface PagespeedTestResult {
    performance: number;
    best_practices: number;
    seo: number;
    accessibility: number;
}

export type Strategy = "mobile" | "desktop";
export type PagespeedTestResultOrError = PagespeedTestResult | string;

export function runPagespeedTest(
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
                performance: categories["performance"].score * 100,
                best_practices: categories["best-practices"].score * 100,
                seo: categories["seo"].score * 100,
                accessibility: categories["accessibility"].score * 100,
            };

            callback(data);
        })
        .catch((err) => callback(err.statusText))
        .finally();
}

// const data = await runPagespeedTest("https://invalid.test");
