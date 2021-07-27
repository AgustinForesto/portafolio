export function cuentaRegresiva() {
    const $form = document.getElementById("enviar-fecha"),
        $h2 = document.getElementById("tiempo-faltante");

    let intervalHoy;

    function faltaTanto() {
        let hoy = new Date(),
            fecha = new Date(localStorage.getItem("fecha-futura")),
            dif = fecha.getTime() - hoy.getTime(),
            secF = Math.floor((dif % (1000 * 60)) / 1000),
            minF = Math.floor((dif % (1000 * 60 * 60)) / (60 * 1000)),
            horaF = Math.floor((dif % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000)),
            diaF = Math.floor(dif / (1000 * 60 * 60 * 24));

        $h2.innerHTML = `Faltan ${diaF} dias, ${horaF} horas, ${minF} minutos y ${secF} segundos para el <mark>${localStorage.getItem("fecha-futura")}</mark>`;

        if (!localStorage.getItem("fecha-futura")) {
            setTimeout(() => {
                clearInterval(intervalHoy);

                $h2.innerHTML = `Ingrese una nueva fecha para saber cuanto falta.`;

                return;
            }, 10000);
        }

        if (fecha <= hoy) {
            localStorage.removeItem("fecha-futura");

            $h2.innerHTML = `${$form.mensaje.value}`;
        }
    }

    if (localStorage.getItem("fecha-futura")) {
        intervalHoy = setInterval(() => {
            faltaTanto();
        }, 1000);
    } else {
        $h2.innerHTML = `Ingrese una fecha para saber cuanto falta.`;
    }

    $form.addEventListener("submit", e => {
        e.preventDefault();

        const strFechaFutura = `${$form.fecha.value} ${$form.hora.value}`;

        if (new Date(strFechaFutura) <= new Date()) {
            $h2.innerHTML = `La fecha <mark>${strFechaFutura}</mark> es menor a la fecha actual, por favor ingrese una fecha de mañana en adelante.`;

            localStorage.removeItem("fecha-futura");

            return;
        } else {
            localStorage.setItem("fecha-futura",strFechaFutura);
        }
        
        if (localStorage.getItem("fecha-futura") != null) {
            intervalHoy = setInterval(() => {
                faltaTanto();
            }, 1000);
        } else {
            $h2.innerHTML = `Ingrese una fecha para saber cuanto falta.`;
        }
    });
}