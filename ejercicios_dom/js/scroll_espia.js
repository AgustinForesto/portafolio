export function scrollSpy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");

            if (entry.isIntersecting) {
                document.querySelector(`a[data-scroll-spy][data-href="${id}"]`).classList.add("active");
            } else {
                document.querySelector(`a[data-scroll-spy][data-href="${id}"]`).classList.remove("active");
            }
        });
    }, { threshold: [0.5, 0.75]});

    $sections.forEach(el => observer.observe(el));
}