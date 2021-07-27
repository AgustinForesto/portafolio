export function moverBola() {
    const $escenario = document.querySelector(".escenario"),
        $bola = document.querySelector(".bola"),
        $seccion = document.getElementById("seccion2");

    let x = 0,
        y = 0;
    
    document.addEventListener("keydown", e => {
        if ($seccion.getBoundingClientRect().top <= 60 && $seccion.getBoundingClientRect().top >= -$escenario.getBoundingClientRect().height * 2/3) {
            if (e.key === "ArrowUp") {
                if ($bola.getBoundingClientRect().top > $escenario.getBoundingClientRect().top) {
                    y--;
                    e.preventDefault();
                }
            }
        
            if (e.key === "ArrowDown") {
                if ($bola.getBoundingClientRect().bottom < $escenario.getBoundingClientRect().bottom) {
                    y++;
                    e.preventDefault();
                }
            }
        
            if (e.key === "ArrowLeft") {
                if ($bola.getBoundingClientRect().left > $escenario.getBoundingClientRect().left) {
                    x--;
                    e.preventDefault();
                }
            }
        
            if (e.key === "ArrowRight") {
                if ($bola.getBoundingClientRect().right < $escenario.getBoundingClientRect().right) {
                    x++;
                    e.preventDefault();
                }
            }

            if (e.key === "r") {
                x = 0;
                y = 0;
            }

            if (e.key === "p") {
                console.log($escenario.getBoundingClientRect())
                console.log($bola.getBoundingClientRect())
            }

            $bola.style.transform = `translate(${x * 10}px,${y * 10}px)`;
        }
    });

    document.addEventListener("click", e => {
        if ($seccion.getBoundingClientRect().top <= 60 && $seccion.getBoundingClientRect().top >= -$escenario.getBoundingClientRect().height * 2 / 3) {
            if (e.target.matches("#arriba")) {
                if ($bola.getBoundingClientRect().top > $escenario.getBoundingClientRect().top) {
                    y--;
                    e.preventDefault();
                }
            }

            if (e.target.matches("#abajo")) {
                if ($bola.getBoundingClientRect().bottom < $escenario.getBoundingClientRect().bottom) {
                    y++;
                    e.preventDefault();
                }
            }

            if (e.target.matches("#izquierda")) {
                if ($bola.getBoundingClientRect().left > $escenario.getBoundingClientRect().left) {
                    x--;
                    e.preventDefault();
                }
            }

            if (e.target.matches("#derecha")) {
                if ($bola.getBoundingClientRect().right < $escenario.getBoundingClientRect().right) {
                    x++;
                    e.preventDefault();
                }
            }

            if (e.target.matches("#reset")) {
                x = 0;
                y = 0;
            }

            $bola.style.transform = `translate(${x * 10}px,${y * 10}px)`;
        }
    });
}