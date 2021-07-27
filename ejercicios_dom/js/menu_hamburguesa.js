export function menuHamburguesa() {
    const $panel = document.querySelector(".panel"),
        $btnMenu = document.querySelector(".btn-menu");
    
    document.addEventListener("click", e => {
        if (e.target.matches(".btn-menu") || e.target.matches(".btn-menu *")) {
            document.body.classList.toggle("is-active");

            $panel.classList.toggle("is-active");

            $btnMenu.classList.toggle("is-active");
        }

        if (e.target.matches(".menu a")) {
            e.preventDefault();

            document.body.classList.toggle("is-active");

            $panel.classList.toggle("is-active");

            $btnMenu.classList.toggle("is-active");

            let idSect = `${e.target.getAttribute("data-href")}`,
                $sect = document.getElementById(idSect);

            $sect.scrollIntoView({behavior: "smooth"});
        }
    });
}