export { showWhenInView };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("pokaz");
            observer.unobserve(entry.target); // przestajemy obserwować element, gdy został już pokazany
        }
    });
});

function showWhenInView(css_class: string): void {
    const notYetShownElements = document.querySelectorAll(css_class);
    notYetShownElements.forEach((el) => observer.observe(el));
}
