export function temaNegro() {
    const $btnTema = document.querySelector(".btn-tema"),
        $temas = document.querySelectorAll("[data-tema]");

    if (localStorage.getItem("tema") === "noche") {
        $temas.forEach(el => {
            el.classList.add("tema-noche");
        });

        $btnTema.textContent = "☀️";
    }

    /*if (localStorage.getItem("tema") === "dia") {
        $temas.forEach(el => {
            el.classList.remove("tema-noche");
        });

        $btnTema.textContent = "🌙";
    }*/
    
    document.addEventListener("click", e => {
        if (e.target === $btnTema) {
            if ($btnTema.textContent === "🌙") {
                localStorage.setItem("tema", "noche");

                $temas.forEach(el => {
                    el.classList.add("tema-noche");
                });

                $btnTema.textContent = "☀️";

                return;
            }

            if ($btnTema.textContent === "☀️") {
                localStorage.setItem("tema", "dia");

                $temas.forEach(el => {
                    el.classList.remove("tema-noche");
                });

                $btnTema.textContent = "🌙";

                return;
            }
        }
    });
}