export function isMobileDevice() {
    let details = navigator.userAgent;

    let regexp = /android|iphone|kindle|ipad/i;

    let isMobileDevice = regexp.test(details);

    return isMobileDevice;
}
