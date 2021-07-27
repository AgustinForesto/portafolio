export function btnScroll() {
    const $btn = document.querySelector(".btn-scroll"),
        $sect1 = document.getElementById("seccion1"),
        $sect2 = document.getElementById("seccion2");

    window.addEventListener("scroll", e => {
        let scrollY = window.pageYOffset || document.documentElement.scrollTop;

        scrollY >= $sect2.offsetTop ? $btn.classList.remove("hidden") : $btn.classList.add("hidden");
    });

    document.addEventListener("click", e => {
        if (e.target === $btn) {
            window.scrollTo({
                behavior: "smooth",
                top: $sect1.offsetTop,
                //left: 0
            });
        }
    });
}