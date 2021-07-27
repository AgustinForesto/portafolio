export function reloj() {
    const $formato = document.getElementById("formato-hora"),
        $reloj = document.querySelectorAll(".hora"),
        $fecha = document.querySelectorAll(".fecha"),
        $btnActivarReloj = document.getElementById("reloj-activar"),
        $btnDesactivarReloj = document.getElementById("reloj-desactivar");

    let hora, min, sec, reloj;

    function activarReloj() {
        reloj = setInterval(() => {
            let act = new Date();

            $fecha.forEach(el => el.textContent = act.toLocaleDateString());

            act.getHours() < 10 ? hora = `0${act.getHours()}` : hora = `${act.getHours()}`;

            act.getMinutes() < 10 ? min = `0${act.getMinutes()}` : min = `${act.getMinutes()}`;

            act.getSeconds() < 10 ? sec = `0${act.getSeconds()}` : sec = `${act.getSeconds()}`;

            if ($formato.getAttribute("data-formato") === "12") {
                if (act.getHours() > 12) {

                    act.getHours() - 12 < 10 ? hora = `0${act.getHours() - 12}` : hora = `${act.getHours() - 12}`;

                    $reloj.forEach(el => el.textContent = `${hora}:${min}:${sec} PM`);
                } else {
                    act.getHours() < 10 ? hora = `0${act.getHours()}` : hora = `${act.getHours()}`;

                    $reloj.forEach(el => el.textContent = `${hora}:${min}:${sec} AM`);
                }
            } else {
                $reloj.forEach(el => el.textContent = `${hora}:${min}:${sec} Hs`);
            }
        }, 1000);
    }

    if (localStorage.getItem("formHora")) {
        $formato.setAttribute("data-formato", localStorage.getItem("formHora"));

        $formato.innerHTML = `${localStorage.getItem("formHora")} Hs`;
    }

    activarReloj();

    $btnActivarReloj.disabled = true;

    document.addEventListener("click", e => {
        if (e.target === $formato) {
            if ($formato.getAttribute("data-formato") === "24") {
                $formato.setAttribute("data-formato", "12");

                $formato.innerHTML = "12 Hs";

                localStorage.setItem("formHora", "12");

                return;
            }
            
            if ($formato.getAttribute("data-formato") === "12") {
                $formato.setAttribute("data-formato", "24");

                $formato.innerHTML = "24 Hs";

                localStorage.setItem("formHora", "24");

                return;
            }
        }

        if (e.target === $btnDesactivarReloj) {
            clearInterval(reloj);

            $btnActivarReloj.disabled = false;

            $btnDesactivarReloj.disabled = true;
        }

        if (e.target === $btnActivarReloj) {
            activarReloj();

            $btnDesactivarReloj.disabled = false;

            $btnActivarReloj.disabled = true;
        }
    });
}

export function alarma() {
    const $btnActivarAlarma = document.getElementById("alarma-activar"),
        $btnDesactivarAlarma = document.getElementById("alarma-desactivar"),
        $alarma = document.createElement("audio"),
        srcAlarma = "assets/alarma.mp3";

    let alarma;
    
    $alarma.setAttribute("src", srcAlarma);

    $alarma.loop = true;

    $btnDesactivarAlarma.disabled = true;

    document.addEventListener("click", e => {
        if (e.target === $btnActivarAlarma) {
            alarma = setTimeout(() => {
                $alarma.play();
            }, 500);

            $btnActivarAlarma.disabled = true;

            $btnDesactivarAlarma.disabled = false;
        }

        if (e.target === $btnDesactivarAlarma) {
            clearTimeout(alarma);

            $alarma.pause();

            $alarma.currentTime = 0;

            $btnDesactivarAlarma.disabled = true;

            $btnActivarAlarma.disabled = false;
        }
    });
}