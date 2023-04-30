const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("pokaz");
        } else {
            entry.target.classList.remove("pokaz");
        }
    });
});

const hiddenElements = document.querySelectorAll(".schowaj");
hiddenElements.forEach((el) => observer.observe(el));
