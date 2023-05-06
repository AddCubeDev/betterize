const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("pokaz");
            observer.unobserve(entry.target); // przestajemy obserwować element, gdy został już pokazany
        }
    });
});

const hiddenElements = document.querySelectorAll(".show-on-scroll");
hiddenElements.forEach((el) => observer.observe(el));
